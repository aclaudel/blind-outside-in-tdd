import React from "react";
import {shallow} from "enzyme";
import App from "./App";
import {instance, mock, when} from "ts-mockito";
import DataApi from "../services/DataApi";
import MainSection from "./sections/MainSection";

describe("App", () => {
    it("shouldn't display items nor loading by default", () => {
        const app = shallow(<App />)
        const mainSection = app.find(MainSection)
        expect(mainSection.props().isLoading).toBe(false);
        expect(mainSection.props().items).toHaveLength(0);
    });

    it("should provide the fetch callback", () => {
        const app = shallow<App>(<App />)
        const mainSection = app.find(MainSection)
        expect(mainSection.props().fetchCallback).toBe(app.instance().fetch);
    });

    it("should switch to loading state when data is loading", () => {
        const dataApiMock = mock(DataApi)
        when(dataApiMock.getItems()).thenReturn(new Promise(() => {}))
        const app = shallow<App>(<App dataApi={instance(dataApiMock)} />)

        app.instance().fetch()

        const mainSection = app.find(MainSection)
        expect(mainSection.props().isLoading).toBe(true);
        expect(mainSection.props().items).toHaveLength(0);
    })

    it("should render the data once available", async () => {
        const items = [{id: 1}];
        const dataApiMock = mock(DataApi)
        when(dataApiMock.getItems()).thenReturn(Promise.resolve(items))
        const app = shallow<App>(<App dataApi={instance(dataApiMock)} />)

        await app.instance().fetch()

        const mainSection = app.find(MainSection)
        expect(mainSection.props().isLoading).toBe(false);
        expect(mainSection.props().items).toBe(items);
    })
});