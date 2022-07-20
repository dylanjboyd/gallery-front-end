import { render } from "@testing-library/react";

import GalleryThumbnails from "./index";

describe("GalleryThumbnails", () => {
  it("renders placeholder text", () => {
    // Arrange
    const photos = [
      {
        title: "Test title",
        description: "Test description",
        imgSrc: "https://example.com",
        fullImgSrc: "https://example.com",
      },
    ];

    // Act
    const { getByText } = render(
      <GalleryThumbnails photos={photos} activePhoto={photos[0]} />
    );

    // Assert
    expect(getByText(/Test title/)).toBeInTheDocument();
    expect(getByText(/Test description/)).toBeInTheDocument();
  });
});
