import { render } from "@testing-library/react";
import FullScreenViewer from "./index";

describe("FullScreenViewer", () => {
  it("renders placeholder text", () => {
    // Act
    const { getByText } = render(<FullScreenViewer />);

    // Assert
    expect(getByText("FullScreenViewer component")).toBeInTheDocument();
  });
});
