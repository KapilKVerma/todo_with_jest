import { object, string, number, TypeOf } from "zod";

const payload = {
  body: object({
    id: number(),
    name: string({
      required_error: "Title is required",
    }),
    price: number({
      required_error: "Price is required",
    }),
  }),
};

const params = {
  params: object({
    itemId: string({
      required_error: "itemId is required",
    }),
  }),
};

export const createItemSchema = object({
  ...payload,
});

export const updateItemSchema = object({
  ...payload,
  ...params,
});

export const deleteItemSchema = object({
  ...params,
});

export const getItemSchema = object({
  ...params,
});

export type CreateItemInput = TypeOf<typeof createItemSchema>;
export type UpdateItemInput = TypeOf<typeof updateItemSchema>;
export type DeleteItemInput = TypeOf<typeof deleteItemSchema>;
export type ReadItemInput = TypeOf<typeof getItemSchema>;
