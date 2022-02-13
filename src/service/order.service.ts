import { OrderRepository } from "../repository/order.repository";

export class OrderService {
  private orderRepository: OrderRepository;

  constructor() {
    this.orderRepository = new OrderRepository();
  }

  async getOrders() {
    return await this.orderRepository.getOrders();
  }

  async createOrder(order: any) {
    return await this.orderRepository.createOrder(order);
  }
}
