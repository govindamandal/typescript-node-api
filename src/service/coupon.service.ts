import { CouponRepository } from "../repository/coupon.repository";

export class CouponService {
  private couponRepository: CouponRepository;

  constructor() {
    this.couponRepository = new CouponRepository();
  }

  async getCoupons() {
    return await this.couponRepository.getCoupouns();
  }

  async createCoupon(coupon: any) {
    return await this.couponRepository.createCoupon(coupon);
  }
}
