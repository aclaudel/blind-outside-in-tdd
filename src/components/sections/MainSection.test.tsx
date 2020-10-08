import React from "react";
import MainSection from "./MainSection";
import {shallow} from "enzyme";
import QuerySection from "./query/QuerySection";

describe("Main section", () => {
  it("should render the Query section if no items and not loading", () => {
    const fetchCallback = jest.fn()
    const app = shallow(<MainSection isLoading={false} items={[]} fetchCallback={fetchCallback}/>)

    const querySection = app.find(QuerySection)

    expect(querySection.props().fetchCallback).toBe(fetchCallback)
  });
});