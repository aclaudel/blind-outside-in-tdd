import React from "react";
import {shallow} from "enzyme";
import App from "./App";
import {instance, mock, when} from "ts-mockito";
import DataApi from "../services/DataApi";
import MainSection from "./sections/MainSection";

describe("App", () => {
  it("shouldn't contain any items nor be in a loading state by default", () => {
    const app = shallow(<App dataApi={instance(mock(DataApi))}/>)

    const mainSection = app.find(MainSection)

    expect(mainSection.props().isLoading).toBe(false);
    expect(mainSection.props().items).toHaveLength(0);
  });

  it("should provide the fetch callback", () => {
    const app = shallow<App>(<App dataApi={instance(mock(DataApi))}/>)
    const mainSection = app.find(MainSection)
    expect(mainSection.props().fetchCallback).toBe(app.instance().fetch);
  });

  it("should switch to loading state when callback is called and data is loading", async () => {
    const dataApiMock = mock(DataApi)
    when(dataApiMock.getItems()).thenReturn(new Promise(() => {}))
    const app = shallow<App>(<App dataApi={instance(dataApiMock)}/>)

    await app.instance().fetch()

    const mainSection = app.find(MainSection)
    expect(mainSection.props().isLoading).toBe(true);
    expect(mainSection.props().items).toHaveLength(0);
  })

  it("should render the data once available", async () => {
    const items = [{id: 1}];
    const dataApiMock = mock(DataApi)
    when(dataApiMock.getItems()).thenReturn(Promise.resolve(items))
    const app = shallow<App>(<App dataApi={instance(dataApiMock)}/>)

    await app.instance().fetch()

    const mainSection = app.find(MainSection)
    expect(mainSection.props().isLoading).toBe(false);
    expect(mainSection.props().items).toBe(items);
  })

});
