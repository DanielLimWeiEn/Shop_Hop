/* eslint-disable */
describe("Testing Purchase Management System Features", () => {
  it("Check that all the features of the purchase management system work", () => {
    // 1. Visit local host.
    cy.visit("http://localhost:3000");

    // 2. Login
    cy.findByRole("link", { name: /login/i }).click();

    cy.findByRole("textbox").type("RS@gmail.com");

    cy.findByPlaceholderText(/password/i).type("12345");

    cy.findByRole("button", { name: /sign in/i }).click();

    // 3. Go to the purchase management system and test that we are on the profile page.
    cy.get(
      "#root > div:nth-child(2) > div > div:nth-child(3) > div:nth-child(2) > div"
    ).realHover();

    cy.findByRole("link", { name: /profile/i }).click();

    cy.findByText(/welcome to your shophop account!/i).should("be.visible");

    // 4. Testing.
    // a. Test that the sidebar is functioning and that we can visit the three pages from sidebar.
    cy.findByTestId("ManageAccountsSharpIcon").should("be.visible");

    cy.findByRole("link", { name: /history/i }).click();
    cy.findByText(/total purchase spending amount/i).should("be.visible");

    cy.findByRole("link", { name: /manage purchases/i }).click();
    cy.findByText(/edit purchase/i).should("be.visible");

    cy.findByRole("link", { name: /profile/i }).click();
    cy.findByText(/welcome to your shophop account!/i).should("be.visible");

    // b. Test profile page, that we are greeted correctly.
    cy.findByRole("heading", { name: /hello, dan/i }).then((val) => {
      const name = val.text().split(" ")[1];
      expect(name).to.be.equal("Dan");
    });

    // c. Test the purchase history page, that we have a summary, an overview and the purchases.
    cy.findByRole("link", { name: /history/i }).click();
    cy.findByText(/summary/i).should("be.visible");
    cy.findByText(/overview/i).should("be.visible");
    cy.get(
      "#root > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(1) > div"
    ).should("be.visible");

    // d. Check the manage purchases page. Check that purchases are shown (READ), that we can add purchases
    // (CREATE), that we can update existing purchases (UPDATE) and that we can delete purchases (DELETE).
    cy.findByRole("link", { name: /manage purchases/i }).click();

    // READ
    cy.get(
      "#root > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)"
    ).should("be.visible");

    // CREATE and UPDATE
    cy.get(
      "#root > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)"
    ).should("be.visible");
    cy.get(
      "#root > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > button:nth-child(1)"
    ).click();

    // Update values of first item.
    cy.get(
      "#root > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > form > div:nth-child(1) > input"
    )
      .clear()
      .type("New Item");
    cy.get(
      "#root > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > form > div:nth-child(2) > input"
    )
      .clear()
      .type("$5");
    cy.get(
      "#root > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > form > div:nth-child(3) > input"
    )
      .clear()
      .type("New Origin");

    cy.findByRole("button", { name: /submit/i }).click();
    cy.wait(500);
    // Get new origin and price and name and verify difference.
    cy.get(
      "#root > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3)"
    ).then((val) => {
      const text = val.text().split("$");
      const origin = text[0];
      const price = "$" + text[1];

      expect(origin).to.be.equal("New Origin");
      expect(price).to.be.equal("$5.00");
    });
    cy.get(
      "#root > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)"
    ).then((val) => {
      const name = val.text();

      expect(name).to.be.equal("Product: New Item");
    });

    // DELETE
    cy.get(
      "#root > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > button:nth-child(2)"
    ).click();
    cy.wait(500);
    // Get new origin and price and name of first item and verify difference.
    cy.get(
      "#root > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3)"
    ).then((val) => {
      const text = val.text().split("$");
      const origin = text[0];
      const price = "$" + text[1];

      expect(origin).to.not.be.equal("New Origin");
      expect(price).to.not.be.equal("$5.00");
    });
    cy.get(
      "#root > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)"
    ).then((val) => {
      const name = val.text();

      expect(name).to.not.be.equal("New Item");
    });

    // 5. Logout and test that we have logged out.
    cy.get(
      "#root > div:nth-child(2) > div > div:nth-child(3) > div:nth-child(2) > div"
    ).realHover();

    cy.findByText(/logout/i).click();

    cy.findByRole("link", { name: /login/i }).should("be.visible");
  });
});
