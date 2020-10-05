import React from "react";
import ItemSection from "./ItemSection";
import { render, screen } from '@testing-library/react'

describe("Item section", () => {
    it("should render each item", () => {
        const items =[{id: 1}, {id:2}]
        render(<ItemSection items={items}/>)

        expect(screen.getAllByTestId("item")).toHaveLength(2)
    });
});
