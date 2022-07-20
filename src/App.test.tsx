import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

describe("App", () => {
  it("renders full app", () => {
    // Act
    const { getByText } = render(<App />, { wrapper: BrowserRouter });

    // Assert
    expect(getByText("Gallery component")).toBeInTheDocument();
  });
});
