import { model, Schema, Model, Document } from "mongoose";

export interface Item extends Document {
  title: string;
  description: string;
  price: number;
  image: string;
}

const ItemSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, default: 0 },
  image: { type: String, default: null },
});

export const ItemModel: Model<Item> = model<Item>("product", ItemSchema);
