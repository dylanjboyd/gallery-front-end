import { render } from "@testing-library/react";

import PhotoCard from "./index";

describe("PhotoCard", () => {
  it("renders placeholder text", () => {
    // Arrange
    const photo = {
      title: "Test title",
      description: "Test description",
      imgSrc: "https://example.com",
    };

    // Act
    const { getByText } = render(<PhotoCard photo={photo} />);

    // Assert
    expect(getByText(/Test title/)).toBeInTheDocument();
    expect(getByText(/Test description/)).toBeInTheDocument();
  });
});
