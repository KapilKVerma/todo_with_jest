import supertest from "supertest";
import createSever from "../../utils/server";

const app = createSever();

describe("item", () => {
  describe("update item route", () => {
    describe("given the item's name is updated", () => {
      it("should return a 200 and update name", async () => {
        const item = { id: 3, name: "item 3 new name", price: 15.1 };
        const { body, statusCode } = await supertest(app)
          .post(`/api/0.1/items`)
          .send(item);
        expect(body.name).toStrictEqual("item 3 new name");
        expect(statusCode).toBe(200);
      });
    });

    describe("given the item's price is updated", () => {
      it("should return a 200 and update price", async () => {
        const item = { id: 3, name: "item 3", price: 16.1 };
        const { body, statusCode } = await supertest(app)
          .post(`/api/0.1/items`)
          .send(item);
        expect(body.price).toStrictEqual(16.1);
        expect(statusCode).toBe(200);
      });
    });
  });
});
