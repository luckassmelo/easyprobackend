describe("Query test Triggers", () => {
  it("Create one Triggers", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:4000/api/trigger",
      body: {
        name: "TESTE_REQUEST",
        piecesValue: null,
        statusValue: "S20000",
        status: true,
        groupId: 1,
        oeeId: null,
        userId: 1264,
        triggerTypeId: 1,
        isProductiveTime: false,
      },
    }).then((res) => {
      expect(res.status).to.be.equal(200);
      expect(res.body).is.not.empty;
      expect(res.body).to.have.property("command");
      expect(res.body.command).to.be.equal("INSERT");
    });
  });

  it("Get all Triggers", () => {
    cy.request({
      method: "GET",
      url: "http://localhost:4000/api/trigger",
      body: Cypress.env(),
    }).then((res) => {
      expect(res.status).to.be.equal(200);
      expect(res.body).is.not.empty;
      expect(res.body[0]).to.have.property("name");
      expect(res.body[0].name).to.be.equal("TRG_MACHINE_STATUS");
      expect(res.body[3]).to.have.property("name");
      expect(res.body[3].name).to.be.equal("TRG_PRODUCED_PIECES");
    });
  });

  it("Get 1 Triggers", () => {
    cy.request({
      method: "GET",
      url: "http://localhost:4000/api/trigger/1",
      body: Cypress.env(),
    }).then((res) => {
      expect(res.status).to.be.equal(200);
      expect(res.body).is.not.empty;
      expect(res.body).to.have.property("_id");
      expect(res.body._id).to.be.equal(1);
    });
  });

  it("Get 2 Triggers", () => {
    cy.request({
      method: "GET",
      url: "http://localhost:4000/api/trigger/2",
      body: Cypress.env(),
    }).then((res) => {
      expect(res.status).to.be.equal(200);
      expect(res.body).is.not.empty;
      expect(res.body).to.have.property("_id");
      expect(res.body._id).to.be.equal(2);
    });
  });
});
