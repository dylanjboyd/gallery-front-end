import { render } from "@testing-library/react";

import Gallery from "./index";

describe("Gallery", () => {
  it("renders placeholder text", () => {
    // Arrange
    const photos = [
      {
        title: "Test title",
        description: "Test description",
        imgSrc: "https://example.com",
      },
    ];

    // Act
    const { getByText } = render(<Gallery photos={photos} />);

    // Assert
    expect(getByText(/Test title/)).toBeInTheDocument();
    expect(getByText(/Test description/)).toBeInTheDocument();
  });
});
