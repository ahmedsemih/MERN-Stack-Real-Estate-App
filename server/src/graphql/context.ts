import { Request, Response } from "express";
import jwt, { JsonWebTokenError } from "jsonwebtoken";

import AuthService from "../services/auth";
import UserService from "../services/user";

type User = {
  _id: string;
  role: string;
};

type Token = {
  _id: string;
  role: string;
  iat: number;
  exp: number;
};

export default async ({ req, res }: { req: Request; res: Response }) => {
  let user: User = null;
  const accessToken = req.headers.authorization || req.cookies["access-token"];
  const refreshToken = req.cookies["refresh-token"];
  
  if (accessToken && accessToken !== undefined) {
    jwt.verify(
      accessToken,
      process.env.JWT_ACCESS_SECRET,
      (error: JsonWebTokenError, decoded: Token) => {
        const { _id, role } = decoded;
        user = { _id, role };
      }
    );
  } else {
    if (refreshToken && refreshToken !== undefined) {
      jwt.verify(
        refreshToken,
        process.env.JWT_REFRESH_SECRET,
        async (error: JsonWebTokenError, decoded: Token) => {
          if (error)
            return {
              user,
              req,
              res,
            };

          const { _id, role } = decoded;

          const isSame = await AuthService.checkRefreshToken(_id, refreshToken);

          if (isSame) {
            user = { _id, role };

            const newAccessToken = await AuthService.generateAccessToken({
              _id,
              role,
            });
            const newRefreshToken = await AuthService.generateRefreshToken({
              _id,
              role,
            });

            await UserService.updateUser({
              _id,
              refreshToken: newRefreshToken,
            });

            res.cookie("access-token", newAccessToken, {
              secure: true,
              maxAge: 1000 * 60 * 30,
              sameSite: "none",
            });
            res.cookie("refresh-token", newRefreshToken, {
              httpOnly: true,
              secure: true,
              maxAge: 1000 * 60 * 60 * 24 * 7,
              sameSite: "none",
            });
          }
        }
      );
    }
  }

  return {
    user,
    req,
    res,
  };
};
