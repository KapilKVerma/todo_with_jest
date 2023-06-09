import { Request, Response } from "express";
import { CreateItemInput, ReadItemInput } from "../schema/item.schema";

let items: CreateItemInput["body"][] = [
  {
    id: 1,
    name: "item 1",
    price: 11.5,
  },
  {
    id: 2,
    name: "item 2",
    price: 12.5,
  },
];

export async function getItemsHandler(req: Request, res: Response) {
  res.send(items);
}

export async function createItem(
  req: Request<{}, {}, CreateItemInput["body"]>,
  res: Response
) {
  const body = req.body;
  items.push(body);
  res.send(body);
}

export async function findItem(
  req: Request<ReadItemInput["params"]>,
  res: Response
) {
  const itemId = req.params.itemId;
  const item = items.find((item) => item.id === parseInt(itemId));
  if (!item) return res.sendStatus(404);
  res.send(item);
}

export async function updateItem(
  req: Request<ReadItemInput["params"]>,
  res: Response
) {
  const body = req.body;
  const itemIndex = items.findIndex((item) => item.id === body.id);
  items[itemIndex] = body;
  res.send(items[itemIndex]);
}

export const deleteItem = async (
  req: Request<ReadItemInput["params"]>,
  res: Response
) => {
  const itemId = parseInt(req.params.itemId);
  items = items.filter((item) => item.id !== itemId);
  res.send(items);
};
