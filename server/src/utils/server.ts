import express from "express";
import cors from "cors";
import morgan from "morgan";
import routes from "../routes";

function createSever() {
  const app = express();

  // Configurations
  app.use(cors());
  app.use(express.json());
  app.use(morgan("dev"));

  // Routes
  app.use("/api", routes);

  return app;
}

export default createSever;
