import { model, Schema, Model, Document } from "mongoose";

export interface Order extends Document {
  name: string;
  email: string;
  data: Object;
  createDate: string;
  updatedDate: string;
  createdBy: string;
  updatedBy: string;
}

const OrderSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  data: { type: Object, required: true },
  createDate: { type: Date, default: Date.now },
  updatedDate: { type: Date, default: Date.now },
  createdBy: { type: String, required: false },
  updatedBy: { type: String, required: false },
});

export const OrderModel: Model<Order> = model<Order>("order", OrderSchema);
