import { render } from "@testing-library/react";

import GalleryThumbnails from "./index";

describe("GalleryThumbnails", () => {
  it("renders placeholder text", () => {
    // Arrange
    const photos = [
      {
        title: "Test title",
        description: "Test description",
        imgSrc: "https://example.com/1",
        fullImgSrc: "https://example.com/2",
      },
    ];

    // Act
    const { getByAltText } = render(
      <GalleryThumbnails photos={photos} activePhoto={photos[0]} />
    );

    // Assert
    const imageElement = getByAltText(/Test title/);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement.getAttribute("src")).toEqual("https://example.com/1");
  });
});
