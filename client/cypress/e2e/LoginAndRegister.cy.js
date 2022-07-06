/* eslint-disable */
describe("Test Price Comparison Feature", () => {
  it("Check that our login and register system has proper error handling and works", () => {
    // 1. Visit local host.
    cy.visit("http://localhost:3000");

    // 2. Click the login button and access the register page.
    cy.findByRole("link", { name: /login/i }).click();

    cy.findByRole("link", { name: /create your shophop account/i }).click();

    // 3. Test
    // a. Register Page. Test for proper error handling.
    const name =
      new Date().toISOString().split("T")[0] + new Date().getSeconds();

    // No inputs.
    cy.findByRole("button", { name: /create/i }).click();
    cy.findByText(/something went wrong/i).should("be.visible");

    // Already Existing Email.
    cy.get("#root > div:nth-child(3) > div > form > input:nth-child(1)").type(
      name
    );
    cy.get("#root > div:nth-child(3) > div > form > input:nth-child(2)").type(
      "RS@gmail.com"
    );
    cy.findByRole("button", { name: /create/i }).click();
    cy.findByText(/email already in use/i).should("be.visible");

    // Password mismatch.
    cy.get("#root > div:nth-child(3) > div > form > input:nth-child(2)")
      .clear()
      .type(name + "@gmail.com");
    cy.get("#root > div:nth-child(3) > div > form > input:nth-child(3)")
      .clear()
      .type(name);
    cy.get("#root > div:nth-child(3) > div > form > input:nth-child(4)")
      .clear()
      .type(name + "1");
    cy.findByRole("button", { name: /create/i }).click();
    cy.findByText(/passwords don't match\./i).should("be.visible");

    // Create a proper account and check that we are greeted correctly.
    cy.get("#root > div:nth-child(3) > div > form > input:nth-child(4)")
      .clear()
      .type(name);
    cy.findByRole("button", { name: /create/i }).click();

    const matching = `hello, ${name}`;
    cy.findByText(new RegExp(matching, "i")).then((val) => {
      const displayed = val.text().split(" ")[1];

      expect(displayed).to.be.equal(name);
    });

    // Logout.
    cy.get(
      "#root > div:nth-child(2) > div > div:nth-child(3) > div:nth-child(2) > div"
    ).realHover();

    cy.findByText(/logout/i).click();
    cy.reload();

    // b. Login Page. Test for proper error handling.
    cy.findByRole("link", { name: /login/i }).click();

    // No inputs.
    cy.findByRole("button", { name: /sign in/i }).click();
    cy.findByText(/user doesn't exist\./i).should("be.visible");

    // Wrong email and Non Existing Email.
    cy.findByRole("textbox")
      .clear()
      .type(name + "1@gmail.com");
    cy.findByRole("button", { name: /sign in/i }).click();
    cy.findByText(/user doesn't exist\./i).should("be.visible");

    cy.findByRole("textbox").clear().type("NewRandomEmail1@gmail.com");
    cy.findByRole("button", { name: /sign in/i }).click();
    cy.findByText(/user doesn't exist\./i).should("be.visible");

    // Wrong Password.
    cy.findByRole("textbox")
      .clear()
      .type(name + "@gmail.com");
    cy.findByPlaceholderText(/password/i)
      .clear()
      .type("12345");
    cy.findByRole("button", { name: /sign in/i }).click();
    cy.findByText(/invalid credentials\./i).should("be.visible");

    // Sign in with a proper account created and ensure that we are greeted correctly.
    cy.findByPlaceholderText(/password/i)
      .clear()
      .type(name);
    cy.findByRole("button", { name: /sign in/i }).click();

    cy.findByText(new RegExp(matching, "i")).then((val) => {
      const displayed = val.text().split(" ")[1];

      expect(displayed).to.be.equal(name);
    });

    // 4. Logout and test that we have logged out.
    cy.get(
      "#root > div:nth-child(2) > div > div:nth-child(3) > div:nth-child(2) > div"
    ).realHover();

    cy.findByText(/logout/i).click();

    cy.findByRole("link", { name: /login/i }).should("be.visible");
  });
});
