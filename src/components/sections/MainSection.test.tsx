import React from "react";
import {render} from "@testing-library/jest-dom";
import MainSection from "./MainSection";
import {shallow} from "enzyme";
import LoginSection from "./login/LoginSection";
import LoadingSection from "./loading/LoadingSection";
import ItemSection from "./item/ItemSection";

describe("Main section", () => {
    it("should render the login section if not logged in", () => {
        const loginCallback = jest.fn()
        const app = shallow(<MainSection isLoggedIn={false} loginCallback={loginCallback}/>)

        const loginSection = app.find(LoginSection)

        expect(loginSection.props().loginCallback).toBe(loginCallback)
    });

    it("should render the loading section if logged in and loading", () => {
        const app = shallow(<MainSection isLoggedIn={true} isLoading={true}/>)

        expect(app.find(LoadingSection).exists()).toBe(true)
    });

    it("should render the item section if logged in and not loading", () => {
        const items = [{id: 1}]
        const app = shallow(<MainSection isLoggedIn={true} isLoading={false} items={items}/>)

        const itemSection = app.find(ItemSection)
        expect(itemSection.props().items).toBe(items)
    })
});