import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import { expressMiddleware } from "@apollo/server/express4";

import server from "./graphql";
import connectDb from "./config/db";
import context from "./graphql/context";

dotenv.config();
const app = express();
const port = Number(process.env.PORT) || 5000;

const bootstrapServer = async () => {
  await connectDb();
  await server.start();

  app.use(
    cors({
      origin: ['http://localhost:5173/', process.env.CLIENT_URL],
      credentials: true,
    })
  );
  app.use(cookieParser());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/graphql", expressMiddleware(server, { context }));

  app.listen(port, () => console.log(`Server is running on port: ${port}`));
};

bootstrapServer();
