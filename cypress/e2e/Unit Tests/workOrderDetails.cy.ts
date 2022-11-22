import { WorkOrderDetails } from "../../../src/domain/entities/WorkOrderDetails";
import { InMemoryWorkOrderDetails } from "../../../src/test/repositories/InMemoryWorkOrderDetails";

describe("All Work order details", () => {
  it("Should be return all work order details", async () => {
    const workOrderDetails = new WorkOrderDetails({
      orderNumber: "6106812087",
      capacityPP: 3.0,
      materialType: "FIOLAX® clear",
      breakabilityPP: "",
      numberOfRings: 0,
      glisseDevice: "",
      ammoniumSulfateDev: "",
      outerDiameterBody: 14.5,
      printingPP: "printed",
      neckDiameter: 12.95,
      schedarea: "VIAL",
      tool: 1101,
    });

    const workOrderDetails2 = new WorkOrderDetails({
      orderNumber: "6105001332",
      capacityPP: 3.0,
      materialType: "SCHOTT Fiolax clear",
      breakabilityPP: "",
      numberOfRings: 0,
      glisseDevice: "",
      ammoniumSulfateDev: "",
      outerDiameterBody: 10.95,
      printingPP: "NOT_PRINTED",
      neckDiameter: 0,
      schedarea: "CAR",
      tool: 19,
    });

    const workOrderDetailsRepository = new InMemoryWorkOrderDetails();
    workOrderDetailsRepository.workOrderDetails.push(
      workOrderDetails,
      workOrderDetails2
    );
    const allWorkOrderDetails =
      await workOrderDetailsRepository.allWorkOrderDetails();

    expect(allWorkOrderDetails.length).to.be.equal(2);
  });
});
