import { connect, disconnect } from "../config/db.config";
import { CouponModel } from "../models/coupon.model";
import { APILogger } from "../logger/api.logger";

export class CouponRepository {
  private logger: APILogger;

  constructor() {
    connect();
    this.logger = new APILogger();
  }

  async getCoupouns() {
    const coupons = await CouponModel.find({});
    console.log("coupons:::", coupons);
    return coupons;
  }

  async createCoupon(coupon: any) {
    let data = {};
    try {
      data = await CouponModel.create(coupon);
    } catch (err) {
      this.logger.error("Error::" + err);
    }
    return data;
  }
}
