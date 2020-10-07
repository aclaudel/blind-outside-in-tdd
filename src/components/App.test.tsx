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
});