import { connect, disconnect } from "../config/db.config";
import { ItemModel } from "../models/item.model";
import { APILogger } from "../logger/api.logger";

export class ItemRepository {
  private logger: APILogger;

  constructor() {
    connect();
    this.logger = new APILogger();
  }

  async getItems() {
    const items = await ItemModel.find({});
    console.log("items:::", items);
    return items;
  }

  async createItem(item: any) {
    console.log("item data ", item);
    let data = {};
    try {
      data = await ItemModel.create(item);
    } catch (err) {
      this.logger.error("Error::" + err);
    }
    return data;
  }

  async updateItem(item: any) {
    let data = {};
    try {
      data = await ItemModel.updateOne(item);
    } catch (err) {
      this.logger.error("Error::" + err);
    }
    return data;
  }

  async deleteItem(itemId: any) {
    let data: any = {};
    try {
      data = await ItemModel.deleteOne({ _id: itemId });
    } catch (err) {
      this.logger.error("Error::" + err);
    }
    return { status: `${data.deletedCount > 0 ? true : false}` };
  }
}
