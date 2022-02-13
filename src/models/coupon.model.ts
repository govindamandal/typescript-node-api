import { model, Schema, Model, Document } from "mongoose";

export interface Coupon extends Document {
  title: string;
  code: string;
  type: string;
  applyOn: string;
  minQty: number;
  minOrder: number;
  value: number;
  createDate: string;
  updatedDate: string;
}

const CouponSchema: Schema = new Schema({
  title: { type: String, required: true },
  code: { type: String, required: true },
  type: { type: String, required: true },
  applyOn: { type: String, required: true },
  minQty: { type: Number, required: true },
  minOrder: { type: Number, required: true },
  value: { type: Number, required: true },
  createDate: { type: Date, default: Date.now },
  updatedDate: { type: Date, default: Date.now },
});

export const CouponModel: Model<Coupon> = model<Coupon>("coupon", CouponSchema);
