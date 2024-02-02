import { expect } from "@wdio/globals";
import LoginPage from "../pageobjects/login.page.js";
import InventoryPage from "../pageobjects/inventory.page.js";
import cartPage from "../pageobjects/cart.page.js";
import checkoutPage from "../pageobjects/checkout.page.js";
import checoutConfirmationPage from "../pageobjects/checoutConfirmation.page.js";
import checkoutComplete from "../pageobjects/checkoutComplete.page.js";

describe("My Login application", () => {
  it("should login with valid credentials", async () => {
    await LoginPage.open();

    await LoginPage.login("standard_user", "secret_sauce");
    await expect(InventoryPage.pageTitle).toBeExisting();
    await expect(InventoryPage.pageTitle).toHaveTextContaining("Swag Labs");
  });
});

describe("Add item to the cart", () => {
  it("Should add the selected item to the cart", async () => {
    await InventoryPage.open();

    await expect(InventoryPage.inventory).toHaveText("Sauce Labs Backpack");
    await InventoryPage.selectItem();
    await expect(cartPage.cartPrice).toBeExisting();
  });

  describe("Complete checkout process", () => {
    it("Should take the user to the checkout process", async () => {
      await checkoutPage.open();

      await expect(checkoutPage.checkoutInformation).toHaveText(
        "Checkout: Your Information"
      );
      await checkoutPage.typeUserInformation("test", "test", "601");
      await expect(checoutConfirmationPage.checkoutOverviewTitle).toHaveText(
        "Checkout: Overview"
      );
      await expect(checoutConfirmationPage.checkoutDescription).toHaveText(
        "Description"
      );
      await expect(checoutConfirmationPage.checkoutSumaryInfo).toExist();
      await expect(checoutConfirmationPage.itemPrice).toHaveText("$29.99");

      await checoutConfirmationPage.summitInformation();

      await expect(checkoutComplete.checkoutTitle).toHaveText(
        "Checkout: Complete!"
      );
      await expect(checkoutComplete.confirmationImage).toHaveAttribute("src");
      await expect(checkoutComplete.completeHeader).toHaveText(
        "Thank you for your order!"
      );
      await expect(checkoutComplete.completeText).toHaveText(
        "Your order has been dispatched, and will arrive just as fast as the pony can get there!"
      );

      await expect(checkoutComplete.backHomeBtn).toHaveText("Back Home");
      await checkoutComplete.returnHome();

      await expect(InventoryPage.header).toHaveText("Products");
    });
  });
});
