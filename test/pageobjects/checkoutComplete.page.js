import { $ } from "@wdio/globals";
import Page from "./page.js";

class CheckoutComplete extends Page {
  get checkoutTitle() {
    return $(".title");
  }

  get confirmationImage() {
    return $(".pony_express");
  }

  get completeHeader() {
    return $(".complete-header");
  }

  get completeText() {
    return $(".complete-text");
  }

  get backHomeBtn() {
    return $("#back-to-products");
  }

  async returnHome() {
    await this.backHomeBtn.click();
  }

  open() {
    return super.open("checkout-complete.html");
  }
}

export default new CheckoutComplete();
