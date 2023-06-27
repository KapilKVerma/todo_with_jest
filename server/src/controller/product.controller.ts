import { Request, Response } from "express";

import { findProducts } from "../service/product.service";

export function findProductsHandler(req: Request, res: Response) {
  const response = findProducts();
  res.send(response);
}
