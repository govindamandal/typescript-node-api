import { model, Schema, Model, Document } from "mongoose";

export interface PriceRule extends Document {
  name: string;
  description: string;
  createDate: string;
  updatedDate: string;
  createdBy: string;
  updatedBy: string;
}

const PriceRuleSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  createDate: { type: Date, default: Date.now },
  updatedDate: { type: Date, default: Date.now },
  createdBy: { type: String, required: false },
  updatedBy: { type: String, required: false },
});

export const PriceRuleModel: Model<PriceRule> = model<PriceRule>(
  "price_rule",
  PriceRuleSchema
);
