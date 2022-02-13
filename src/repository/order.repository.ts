import { connect, disconnect } from "../config/db.config";
import { OrderModel } from "../models/order.model";
import { APILogger } from "../logger/api.logger";

export class OrderRepository {
  private logger: APILogger;

  constructor() {
    connect();
    this.logger = new APILogger();
  }

  async getOrders() {
    const orders = await OrderModel.find({});
    console.log("orders:::", orders);
    return orders;
  }

  async createOrder(order: any) {
    let data = {};
    try {
      data = await OrderModel.create(order);
    } catch (err) {
      this.logger.error("Error::" + err);
    }
    return data;
  }
}
