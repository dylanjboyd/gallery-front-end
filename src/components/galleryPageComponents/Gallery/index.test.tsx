import { render } from "@testing-library/react";
import FullScreenViewer from "./index";

describe("Gallery", () => {
  it("renders placeholder text", () => {
    // Act
    const { getByText } = render(<FullScreenViewer />);

    // Assert
    expect(getByText("Gallery component")).toBeInTheDocument();
  });
});
