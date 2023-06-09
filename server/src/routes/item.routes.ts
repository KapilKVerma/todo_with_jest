import express from "express";
import {
  getItemsHandler,
  createItem,
  findItem,
  updateItem,
  deleteItem,
} from "../controller/item.controller";
const router = express.Router();

import validateResource from "../middleware/validate.resource";
import {
  createItemSchema,
  deleteItemSchema,
  getItemSchema,
  updateItemSchema,
} from "../schema/item.schema";

router.get("/items", getItemsHandler); // Get Items
router.post("/items", validateResource(createItemSchema), createItem); // Create Item
router.get("/items/:itemId", validateResource(getItemSchema), findItem); // Find Item
router.put("/items/:itemId", validateResource(updateItemSchema), updateItem); // Update Item
router.delete("/items/:itemId", validateResource(deleteItemSchema), deleteItem); // Delete Item

export default router;
