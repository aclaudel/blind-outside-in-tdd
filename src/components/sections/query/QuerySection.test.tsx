import React from "react";
import {render, screen} from '@testing-library/react'
import QuerySection from "./QuerySection";
import userEvent from "@testing-library/user-event";
import {act} from "react-dom/test-utils";

describe("Query section", () => {
  it("should render a fetch button with the callback", () => {
    const fetchCallbackMock = jest.fn()
    render(<QuerySection fetchCallback={fetchCallbackMock}/>)

    act(() => {
      userEvent.click(screen.getByTestId("fetch-button"))
    })

    expect(fetchCallbackMock).toHaveBeenCalled()
  });
});