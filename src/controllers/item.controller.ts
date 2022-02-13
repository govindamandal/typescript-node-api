import { APILogger } from "../logger/api.logger";
import { ItemService } from "../service/item.service";

export class ItemController {
  private itemService: ItemService;
  private logger: APILogger;

  constructor() {
    this.itemService = new ItemService();
    this.logger = new APILogger();
  }

  async getItems() {
    this.logger.info("Controller: getItems", null);
    return await this.itemService.getItems();
  }

  async createItem(item: any) {
    this.logger.info("Controller: createItem", item);
    return await this.itemService.createItem(item);
  }

  async updateItem(item: any) {
    this.logger.info("Controller: updateItem", item);
    return await this.itemService.updateItem(item);
  }

  async deleteItem(itemId: any) {
    this.logger.info("Controller: deleteItem", itemId);
    return await this.itemService.deleteItem(itemId);
  }
}
