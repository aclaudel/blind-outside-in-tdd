import React from "react";
import MainSection from "./MainSection";
import {shallow} from "enzyme";
import LoadingSection from "./loading/LoadingSection";
import ItemSection from "./item/ItemSection";
import QuerySection from "./query/QuerySection";

describe("Main section", () => {
    it("should render the Query section if no items and not loading", () => {
        const queryCallback = jest.fn()
        const app = shallow(<MainSection isLoading={false} items={[]} queryCallback={queryCallback}/>)

        const loginSection = app.find(QuerySection)

        expect(loginSection.props().queryCallback).toBe(queryCallback)
    });

    it("should render the loading section when loading flag", () => {
        const app = shallow(<MainSection isLoading={true}/>)

        expect(app.find(LoadingSection).exists()).toBe(true)
    });

    it("should render the item section if not loading and items present", () => {
        const items = [{id: 1}]
        const app = shallow(<MainSection isLoading={false} items={items}/>)

        const itemSection = app.find(ItemSection)
        expect(itemSection.props().items).toBe(items)
    })
});