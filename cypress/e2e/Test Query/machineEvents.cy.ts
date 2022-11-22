describe("Query test Events Machine", () => {
  it("Get all service information", () => {
    cy.request({
      method: "GET",
      url: "http://localhost:4000/api/allServiceInformation",
      body: Cypress.env(),
    }).then((res) => {
      expect(res.status).to.be.equal(200);
      expect(res.body).is.not.empty;
      expect(res.body).to.have.property("triggers");
      expect(res.body).to.have.property("machineEvents");
    });
  });

  it("Get all service information", () => {
    cy.request({
      method: "GET",
      url: "http://localhost:4000/api/cronetwork/workOrderDetails",
      body: Cypress.env(),
    }).then((res) => {
      expect(res.status).to.be.equal(200);
      expect(res.body).is.not.empty;
      expect(res.body[0]).to.have.property("ORDER_NO");
      expect(res.body[0].ORDER_NO).to.be.equal("6106812087"); //diferente de nulo
    });
  });

  it("Get all Machine Event", () => {
    cy.request({
      method: "GET",
      url: "http://localhost:4000/api/pass/machineEvent",
      body: Cypress.env(),
    }).then((res) => {
      expect(res.status).to.be.equal(200);
      // expect(res.body).is.not.empty;
      expect(res.body).to.have.property("A01");
      expect(res.body.A01).to.have.property("eventName");
      expect(res.body.A01.eventName).to.be.equal("COUNTER_READING");
    });
  });
});
