/* eslint-disable */
describe("Test Price Comparison Feature", () => {
  it("Check that all the features of the web scraper and price comparison page work", () => {
    // 1. Visit local host.
    //cy.visit("https://shophop-orbital.netlify.app/");
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

    // 4. Testing
    // a. Verify that items are present.
    let newRes;
    cy.findByText(/results/i).then((res) => {
      newRes = parseInt(res.text().split(" ")[0]);

      expect(numRes).to.not.be.equal(newRes);
    });

    // b. Verify that we can sort the items by checking for their presence and then sorting and
    // testing that the first element has updated.
    cy.findByRole("button", { name: /relevance/i }).click();
    cy.findByRole("option", { name: /price \(low to high\)/i }).should(
      "be.visible"
    );
    cy.findByRole("option", { name: /price \(high to low\)/i }).should(
      "be.visible"
    );

    let firstEltPrice;
    cy.get(
      "#root > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(3)"
    )
      .then((res) => (firstEltPrice = parseFloat(res.text().split("$")[1])))
      .then((res) => console.log(res));

    cy.findByRole("option", { name: /price \(low to high\)/i }).click();
    cy.get(
      "#root > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(3)"
    ).then((res) => {
      const newFirstEltPrice = parseFloat(res.text().split("$")[1]);
      expect(newFirstEltPrice).to.not.be.equal(firstEltPrice);
    });

    cy.findByRole("button", { name: /price \(low to high\)/i }).click();
    cy.findByRole("option", { name: /price \(high to low\)/i }).click();
    cy.get(
      "#root > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(3)"
    ).then((res) => {
      const newFirstEltPrice = parseFloat(res.text().split("$")[1]);
      expect(newFirstEltPrice).to.not.be.equal(firstEltPrice);
    });

    // c. Test that add to cart and link functionality.
    cy.get(
      "#root > div:nth-child(3) > div:nth-child(3) > div:nth-child(2)"
    ).realHover();
    cy.get(
      "#root > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div"
    ).should("be.visible");
    cy.get(
      "#root > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > a"
    ).should("be.visible");

    cy.get(
      "#root > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div"
    ).click();
    cy.get(
      "#root > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div"
    ).click();
    cy.get(
      "#root > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div"
    ).click();
    cy.findByRole("link", { name: /2/i }).should("be.visible");

    cy.get(
      "#root > div:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > a"
    ).should("not.have.attr", "href", "undefined");

    // d. Test the recommendation modal functionality.
    // Checks presence of recommendation button and clicks it.
    cy.findByRole("button", { name: /recommendations/i }).should("be.visible");
    cy.findByRole("button", { name: /recommendations/i }).click();

    // Checks that items are being show properly.
    cy.findByRole("heading", { name: /top 3 items/i }).should("be.visible");
    cy.get(
      "body > div:nth-child(6) > div:nth-child(3) > div:nth-child(2)"
    ).should("be.visible");

    // Checks that there are the add to cart and link buttons.
    cy.get(
      "body > div:nth-child(6) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > button"
    ).should("be.visible");
    cy.get(
      "body > div:nth-child(6) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > a"
    ).should("be.visible");

    // Check that link exists and is not undefined as a href attribute.
    cy.get(
      "body > div:nth-child(6) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > a"
    ).should("not.have.attr", "href", "undefined");

    // Add 3 items to cart
    cy.get(
      "body > div:nth-child(6) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > button"
    ).click();
    cy.get(
      "body > div:nth-child(6) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > button"
    ).click();
    cy.get(
      "body > div:nth-child(6) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > button"
    ).click();

    cy.get("body").click("left");

    // Check that items are added to cart and that modal has closed.
    cy.findByRole("button", { name: /recommendations/i }).should("be.visible");
    cy.findByRole("link", { name: /5/i }).should("be.visible");

    // 5. Logout and test that we have logged out.
    cy.get(
      "#root > div:nth-child(2) > div > div:nth-child(3) > div:nth-child(2) > div"
    ).realHover();

    cy.findByText(/logout/i).click();

    cy.findByRole("link", { name: /login/i }).should("be.visible");
  });
});
