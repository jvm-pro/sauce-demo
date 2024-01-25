import { $ } from "@wdio/globals";
import Page from "./page.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class InventoryPage extends Page {
  /**
   * define selectors using getter methods
   */
  get pageTitle() {
    return $(".app_logo");
  }

  get inventory() {
    return $("#item_4_title_link");
  }

  get itemBtn() {
    return $("#add-to-cart-sauce-labs-backpack");
  }

  async selectItem() {}

  open() {
    return super.open("inventory.html");
  }
}

export default new InventoryPage();
