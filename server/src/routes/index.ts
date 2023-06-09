import express from "express";
import item from "./item.routes";

const app = express();

app.use(item);

export default app;
