import DataApi from "./DataApi";

describe("Data API", () => {
  it("should always return two items in less than 5 seconds", async () => {
    const dataApi = new DataApi()
    const items = await dataApi.getItems();
    expect(items).toHaveLength(2)
  });
});
