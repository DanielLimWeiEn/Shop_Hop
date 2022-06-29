/* eslint-disable */
describe("Testing Purchase System and Shopping Cart Features", () => {
  it("Check that all the features of the purchase system and shopping cart work", () => {
    // 1. Visit local host.
    cy.visit("http://localhost:3000");

    // 2. Login
    cy.findByRole("link", { name: /login/i }).click();

    cy.findByRole("textbox").type("RS@gmail.com");

    cy.findByPlaceholderText(/password/i).type("12345");

    cy.findByRole("button", { name: /sign in/i }).click();

    // 3. Go to price comparison page and make a search.
    cy.findByRole("link", { name: /start searching/i }).click();

    let numRes;
    cy.findByText(/results/i)
      .then((res) => (numRes = parseInt(res.text().split(" ")[0])))
      .then((res) => console.log(res));

    cy.findByRole("textbox").type("nike air max 1");

    cy.intercept("http://loclhost5000/shopping/search").as("shopping");
    cy.findByRole("button", { name: "" }).click();
    cy.wait(15000);

    // 4. Add 8 items to our cart.
    cy.get(
      "#root > div:nth-child(3) > div:nth-child(3) > div:nth-child(2)"
    ).realHover();
    cy.get(
      "#root > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div"
    ).click();
    cy.get(
      "#root > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div"
    ).click();
    cy.get(
      "#root > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div"
    ).click();

    cy.get(
      "#root > div:nth-child(3) > div:nth-child(3) > div:nth-child(3)"
    ).realHover();
    cy.get(
      "#root > div:nth-child(3) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div"
    ).click();
    cy.get(
      "#root > div:nth-child(3) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div"
    ).click();
    cy.get(
      "#root > div:nth-child(3) > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div"
    ).click();

    cy.get(
      "#root > div:nth-child(3) > div:nth-child(3) > div:nth-child(4)"
    ).realHover();
    cy.get(
      "#root > div:nth-child(3) > div:nth-child(3) > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > div"
    ).click();
    cy.get(
      "#root > div:nth-child(3) > div:nth-child(3) > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > div"
    ).click();
    cy.get(
      "#root > div:nth-child(3) > div:nth-child(3) > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > div"
    ).click();

    // 5. Test that badge number is shown correctly.
    cy.findByRole("link", { name: /8/i }).should("be.visible");

    // 6. Go to out cart page.
    cy.findByRole("link", { name: /8/i }).click();

    // 7. Testing.
    // a. Test that items are present and that order summary is present.
    cy.get(
      "#root > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1)"
    ).should("be.visible");
    cy.get(
      "#root > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2)"
    ).should("be.visible");
    cy.get(
      "#root > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(3)"
    ).should("be.visible");

    cy.get(
      "#root > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div > div > span"
    ).then((res) => {
      const arr = res.text().split(" ");
      const totalVal = parseFloat(arr[arr.length - 1]);
      expect(totalVal).to.not.be.equal(0);
    });

    // b. Test that we can add and reduce quantity of items and that we can remove items.
    // Get the initial quantity of items.
    let initialAmount;
    cy.get(
      "#root > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div"
    ).then((res) => {
      initialAmount = parseInt(res.text());
    });

    // Get the initial total cost of all items.
    let initialCost;
    cy.get(
      "#root > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div > div > span"
    ).then((res) => {
      const arr = res.text().split(" ");
      const totalVal = parseFloat(arr[arr.length - 1]);
      initialCost = totalVal;
    });

    // Add one item and check that item count and total cost have changed.
    cy.get(
      "#root > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > svg:nth-child(1)"
    ).click("bottomLeft");
    cy.get(
      "#root > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div"
    ).then((res) => {
      const newAmount = parseInt(res.text());
      expect(newAmount - 1).to.be.equal(initialAmount);
    });
    cy.get(
      "#root > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div > div > span"
    ).then((res) => {
      const arr = res.text().split(" ");
      const totalVal = parseFloat(arr[arr.length - 1]);
      expect(totalVal).to.not.be.equal(initialCost);
    });

    // Deduct two items and check that item count and total cost have changed.
    cy.get(
      "#root > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > svg:nth-child(3)"
    ).click("bottomRight");
    cy.get(
      "#root > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > svg:nth-child(3)"
    ).click("bottomRight");
    cy.get(
      "#root > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div"
    ).then((res) => {
      const newAmount = parseInt(res.text());
      expect(newAmount + 1).to.be.equal(initialAmount);
    });
    cy.get(
      "#root > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div > div > span"
    ).then((res) => {
      const arr = res.text().split(" ");
      const totalVal = parseFloat(arr[arr.length - 1]);
      expect(totalVal).to.not.be.equal(initialCost);
    });

    // Deduct two more of the same item and check that we only have two listings and total amount has changed.
    cy.get(
      "#root > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > svg:nth-child(3)"
    ).click("bottomRight");
    cy.get(
      "#root > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > svg:nth-child(3)"
    ).click("bottomRight");
    cy.get(
      "#root > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(3)"
    ).should("not.exist");
    cy.get(
      "#root > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div > div > span"
    ).then((res) => {
      const arr = res.text().split(" ");
      const totalVal = parseFloat(arr[arr.length - 1]);
      expect(totalVal).to.not.be.equal(initialCost);
    });

    // c. Test that the stripe checkout is visible and that we can make a payment.
    cy.findByRole("button", { name: /buy now/i }).click();

    cy.get("body > iframe").should("be.visible");

    cy.reload();

    // d. Check that continue shopping works.
    cy.findByRole("link", { name: /continue shopping/i }).click();

    cy.findByRole("textbox").should("be.visible");

    // 8. Logout and test that we have logged out.
    cy.get(
      "#root > div:nth-child(2) > div > div:nth-child(3) > div:nth-child(2) > div"
    ).realHover();

    cy.findByText(/logout/i).click();

    cy.findByRole("link", { name: /login/i }).should("be.visible");
  });
});
