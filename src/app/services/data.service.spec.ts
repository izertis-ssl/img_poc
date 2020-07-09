import { TestBed } from "@angular/core/testing";

import { DataService } from "./data.service";

describe("DataService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });

  it("items should have 4000 elements", () => {
    const service: DataService = TestBed.get(DataService);
    expect(service.items.length).toEqual(4000);
  });

  it("url photo should contain id item", () => {
    const service: DataService = TestBed.get(DataService);
    expect(service.items[10].photo).toContain(service.items[10].id.toString());
  });

});
