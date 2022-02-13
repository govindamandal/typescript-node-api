import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import { APILogger } from "./logger/api.logger";
import { ItemController } from "./controllers/item.controller";
import { CouponController } from "./controllers/coupon.controller";
import { OrderController } from "./controllers/order.controller";

class App {
  public express: express.Application;
  public logger: APILogger;
  public itemController: ItemController;
  public couponController: CouponController;
  public orderController: OrderController;

  private options: cors.CorsOptions = {
    allowedHeaders: [
      "Origin",
      "X-Requested-With",
      "Content-Type",
      "Accept",
      "X-Access-Token",
    ],
    credentials: true,
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    origin: "*",
    preflightContinue: false,
  };

  constructor() {
    this.express = express();
    this.express.use(cors(this.options));
    this.middleware();
    this.routes();
    this.logger = new APILogger();
    this.itemController = new ItemController();
    this.couponController = new CouponController();
    this.orderController = new OrderController();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  private routes(): void {
    // Item Routes
    this.express.get("/api/items", (req, res) => {
      this.itemController.getItems().then((data) => res.json(data));
    });

    this.express.post("/api/item", (req, res) => {
      console.log(req.body);
      this.itemController.createItem(req.body).then((data) => res.json(data));
    });

    this.express.put("/api/item", (req, res) => {
      this.itemController
        .updateItem(req.body.task)
        .then((data) => res.json(data));
    });

    this.express.delete("/api/item/:id", (req, res) => {
      this.itemController
        .deleteItem(req.params.id)
        .then((data) => res.json(data));
    });

    // Coupon Routes
    this.express.get("/api/coupons", (req, res) => {
      this.couponController.getCoupons().then((data) => res.json(data));
    });

    this.express.post("/api/coupon", (req, res) => {
      console.log(req.body);
      this.couponController
        .createCoupon(req.body)
        .then((data) => res.json(data));
    });

    // Order Routes
    this.express.get("/api/orders", (req, res) => {
      this.orderController.getOrders().then((data) => res.json(data));
    });

    this.express.post("/api/order", (req, res) => {
      console.log(req.body);
      this.orderController.createOrder(req.body).then((data) => res.json(data));
    });

    this.express.get("/", (req, res, next) => {
      res.send("Typescript App works!!");
    });

    // handle undefined routes
    this.express.use("*", (req, res, next) => {
      res.send("Make sure url is correct!!!");
    });
  }
}

export default new App().express;
