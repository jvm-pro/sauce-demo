import { expect } from "@wdio/globals";
import LoginPage from "../pageobjects/login.page.js";
import InventoryPage from "../pageobjects/inventory.page.js";
import inventoryPage from "../pageobjects/inventory.page.js";

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
    await inventoryPage.open();
  });
});
