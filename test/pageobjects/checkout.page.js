import { $ } from "@wdio/globals";
import Page from "./page.js";

class CheckoutPage extends Page {
  get checkoutInformation() {
    return $(".title");
  }

  get firstName() {
    return $("#first-name");
  }

  get lastName() {
    return $("#last-name");
  }

  get zipCode() {
    return $("#postal-code");
  }

  get summitButton() {
    return $("#continue");
  }

  async typeUserInformation(firstName, lastName, zipCode) {
    await this.firstName.setValue(firstName);
    await this.lastName.setValue(lastName);
    await this.zipCode.setValue(zipCode);
    await this.summitButton.click();
  }

  open() {
    return super.open("checkout-step-one.html");
  }
}

export default new CheckoutPage();
