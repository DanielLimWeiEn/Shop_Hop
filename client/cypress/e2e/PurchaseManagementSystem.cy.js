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

    // 3. Go to the purchase management system.
    cy.get(
      "#root > div:nth-child(2) > div > div:nth-child(3) > div:nth-child(2) > div"
    ).realHover();

    cy.findByRole("link", { name: /profile/i }).click();
  });
});
