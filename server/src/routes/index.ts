import express from "express";
import item from "./item.routes";
import product from "./product.route";

const app = express();

app.use(item);
app.use(product);

export default app;
