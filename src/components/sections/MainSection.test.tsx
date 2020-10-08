import React from "react";
import MainSection from "./MainSection";
import {shallow} from "enzyme";
import QuerySection from "./query/QuerySection";
import LoadingSection from "./loading/LoadingSection";

describe("Main section", () => {
  it("should render the Query section if no items and not loading", () => {
    const fetchCallback = jest.fn()
    const app = shallow(<MainSection isLoading={false} items={[]} fetchCallback={fetchCallback}/>)

    const querySection = app.find(QuerySection)

    expect(querySection.props().fetchCallback).toBe(fetchCallback)
  });

  it("should render the loading section when loading flag active", () => {
    const app = shallow(<MainSection isLoading={true}/>)

    expect(app.find(LoadingSection).exists()).toBe(true)
  });

});