import config from "config";
import createSever from "./utils/server";

const PORT = config.get<number>("port");

const app = createSever();

app.listen(PORT, () => {
  console.log(`Sever is running on port: ${PORT}`);
});
