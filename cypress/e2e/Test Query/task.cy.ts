describe("Query create Task Trigger", () => {
  it("Create one Task", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:4000/api/task",
      body: {
        triggerId: 2,
        name: "Testando o post",
        closed: false,
      },
    }).then((res) => {
      expect(res.status).to.be.equal(200);
      expect(res.body).is.not.empty;
      expect(res.body).to.have.property("command");
      expect(res.body.command).to.be.equal("INSERT");
    });
  });
});
