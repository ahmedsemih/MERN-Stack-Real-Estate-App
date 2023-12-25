import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { expressMiddleware } from "@apollo/server/express4";

import server from "./graphql";
import connectDb from "./config/db";

dotenv.config();
const app = express();
const port = Number(process.env.PORT) || 5000;
const APOLLO_URL = "https://studio.apollographql.com";

const bootstrapServer = async () => {
  await connectDb();
  await server.start();

  app.use(
    cors({
      origin: [process.env.CLIENT_URL, APOLLO_URL],
      credentials: true,
    })
  );
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/graphql", expressMiddleware(server));

  app.listen(port, () => console.log(`Server is running on port: ${port}`));
};

bootstrapServer();
