import * as http from "http";
import App from "./app";
import { APILogger } from "./logger/api.logger";
require("dotenv").config();

const port = process.env.PORT || 3070;

App.set("port", port);
const server = http.createServer(App);
server.listen(port);

const logger = new APILogger();

server.on("listening", function (): void {
  logger.info(`Listening on ${port}`, null);
});

module.exports = App;
