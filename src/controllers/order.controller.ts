import { APILogger } from "../logger/api.logger";
import { OrderService } from "../service/order.service";

export class OrderController {
  private orderService: OrderService;
  private logger: APILogger;

  constructor() {
    this.orderService = new OrderService();
    this.logger = new APILogger();
  }

  async getOrders() {
    this.logger.info("Controller: getOrder", null);
    return await this.orderService.getOrders();
  }

  async createOrder(order: any) {
    this.logger.info("Controller: createOrder", order);
    return await this.orderService.createOrder(order);
  }
}
