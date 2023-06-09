import supertest from "supertest";
import createSever from "../../utils/server";

const app = createSever();

describe("item", () => {
  describe.only("get item route", () => {
    describe("given the item does not exist", () => {
      it("should return a 404", async () => {
        const itemId = 10;
        await supertest(app).get(`/api/0.1/items/${itemId}`).expect(404);
      });
    });

    describe("given the item does exist", () => {
      it("should return a 200", async () => {
        const itemId = 2;
        const { statusCode } = await supertest(app).get(
          `/api/0.1/items/${itemId}`
        );
        expect(statusCode).toBe(200);
      });
    });
  });

  describe("post item route", () => {
    describe("given the item's fields are missing", () => {
      it("should return a 400", async () => {
        const items = [
          { id: 3, price: 15.1 },
          {
            id: 3,
            name: "item 3",
          },
          {},
        ];

        for (const item of items) {
          const { statusCode } = await supertest(app)
            .post(`/api/0.1/items`)
            .send(item);
          expect(statusCode).toBe(400);
        }
      });
    });

    describe("given the item's fields exists", () => {
      it("should return a 200", async () => {
        const newProduct = { id: 3, name: "item 3", price: 15.1 };
        const { body, statusCode } = await supertest(app)
          .post(`/api/0.1/items`)
          .send(newProduct);

        expect(body.id).toBe(3);
        expect(body.name).toBe("item 3");
        expect(statusCode).toBe(200);
      });
    });
  });
});
