import { $ } from "@wdio/globals";
import Page from "./page.js";

class CartPage extends Page {
  get title() {
    return $(".title");
  }

  get cartPrice() {
    return $(".inventory_item_price");
  }

  get checkout() {
    return $("#checkout");
  }

  async cartCheckout() {
    await this.checkout.click();
  }

  open() {
    return super.open("cart.html");
  }
}

export default new CartPage();
