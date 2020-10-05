import React from "react";
import { render, fireEvent, screen } from '@testing-library/react'
import QuerySection from "./QuerySection";
import userEvent from "@testing-library/user-event";
import {act} from "react-dom/test-utils";

describe("Query section", () => {
    it("should render a fetch button with the callback", () => {
        const queryCallbackMock = jest.fn()
        const {getByTestId} = render(<QuerySection queryCallback={queryCallbackMock}/>)

        act(() => {
            userEvent.click(screen.getByTestId("query-button"))
        })

        expect(queryCallbackMock).toHaveBeenCalled()
    });
});