import React from "react";
import App from "./components/App";
import {render, screen} from "@testing-library/react";
import DataApi from "./services/DataApi";
import userEvent from "@testing-library/user-event";
import {act} from "react-dom/test-utils";

describe("My App", () => {
  it("should display data when requested", async () => {
    render(<App dataApi={new DataApi()}/>)

    act(() => {
      userEvent.click(screen.getByTestId("fetch-button"))
    })

    const items = await screen.findAllByTestId("item")
    expect(items).toHaveLength(2)
    items.forEach(item =>
      expect(item).toBeInTheDocument())
  });
});
