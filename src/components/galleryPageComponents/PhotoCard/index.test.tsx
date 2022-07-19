import { render } from "@testing-library/react";
import FullScreenViewer from "./index";

describe("PhotoCard", () => {
  it("renders placeholder text", () => {
    // Act
    const { getByText } = render(<FullScreenViewer />);

    // Assert
    expect(getByText("PhotoCard component")).toBeInTheDocument();
  });
});
