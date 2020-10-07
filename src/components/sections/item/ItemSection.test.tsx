import React from "react";
import ItemSection from "./ItemSection";
import {render, screen} from '@testing-library/react'

describe("Item section", () => {
  it("should render each item", async () => {
    const itemsToRender = [{id: 1}, {id: 2}]
    render(<ItemSection items={itemsToRender}/>)

    const items = await screen.findAllByTestId("item")
    expect(items).toHaveLength(2)
    items.forEach(item =>
      expect(item).toBeInTheDocument())
  });
});
