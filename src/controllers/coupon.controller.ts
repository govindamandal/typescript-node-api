import { APILogger } from "../logger/api.logger";
import { CouponService } from "../service/coupon.service";

export class CouponController {
  private couponService: CouponService;
  private logger: APILogger;

  constructor() {
    this.couponService = new CouponService();
    this.logger = new APILogger();
  }

  async getCoupons() {
    this.logger.info("Controller: getOrder", null);
    return await this.couponService.getCoupons();
  }

  async createCoupon(order: any) {
    this.logger.info("Controller: createCoupon", order);
    return await this.couponService.createCoupon(order);
  }
}
