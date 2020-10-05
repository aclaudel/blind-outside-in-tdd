import React from "react";
import {shallow} from "enzyme";
import App from "./App";
import {instance, mock, when} from "ts-mockito";
import DataApi from "../services/DataApi";
import MainSection from "./sections/MainSection";

describe("App", () => {
    it("shouldn't be logged in by default", () => {
        const app = shallow(<App />)
        const mainSection = app.find(MainSection)
        expect(mainSection.props().isLoggedIn).toBe(false);
    });

    it("should load the data once logged in", () => {
        const dataApiMock = mock(DataApi)
        when(dataApiMock.getItems()).thenReturn(new Promise(() => {}))
        const app = shallow<App>(<App dataApi={instance(dataApiMock)} />)

        app.instance().login()

        const mainSection = app.find(MainSection)
        expect(mainSection.props().isLoggedIn).toBe(true);
        expect(mainSection.props().isLoading).toBe(true);
    })

    it("should render the data once available", async () => {
        const items = [{id: 1}];
        const dataApiMock = mock(DataApi)
        when(dataApiMock.getItems()).thenReturn(Promise.resolve(items))
        const app = shallow<App>(<App dataApi={instance(dataApiMock)} />)

        await app.instance().login()

        const mainSection = app.find(MainSection)
        expect(mainSection.props().isLoggedIn).toBe(true);
        expect(mainSection.props().isLoading).toBe(false);
        expect(mainSection.props().items).toBe(items);
    })
});