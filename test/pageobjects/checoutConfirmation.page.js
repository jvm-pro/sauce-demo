import { $ } from "@wdio/globals";
import Page from "./page.js";

class ChecoutInformation extends Page {
  get checkoutOverviewTitle() {
    return $(".title");
  }

  get checkoutDescription() {
    return $(".cart_desc_label");
  }

  get checkoutSumaryInfo() {
    return $(".summary_info");
  }

  get itemPrice() {
    return $(".inventory_item_price");
  }

  get summitBtn() {
    return $("#finish");
  }

  async summitInformation() {
    await this.summitBtn.click();
  }

  open() {
    return super.open("checkout-step-two.html");
  }
}

export default new ChecoutInformation();
