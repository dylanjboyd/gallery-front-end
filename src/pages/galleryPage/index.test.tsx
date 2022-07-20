import { render } from "@testing-library/react";

import { GalleryContext } from "../../contexts/GalleryContext";
import { Photo } from "../../models/Photo";
import GalleryPage from "./index";

describe("GalleryPage", () => {
  it("renders title text", () => {
    // Act
    const { getByText } = render(<GalleryPage />);

    // Assert
    expect(getByText(/Your Photos/)).toBeInTheDocument();
  });

  it("renders photos", async () => {
    // Arrange
    const photos: Photo[] = [
      {
        title: "First photo",
        description: "First desc",
        imgSrc: "https://example.com",
        fullImgSrc: "https://example.com",
      },
      {
        title: "Second photo",
        description: "Second desc",
        imgSrc: "https://example.com",
        fullImgSrc: "https://example.com",
      },
    ];
    const fetchPhotos = async () => {
      // Do nothing
    };
    const componentToRender = (
      <GalleryContext.Provider value={{ photos, fetchPhotos }}>
        <GalleryPage />
      </GalleryContext.Provider>
    );

    // Act
    const { findByText } = render(componentToRender);

    // Assert
    for (const word of ["First", "Second"]) {
      expect(await findByText(`${word} photo`)).toBeInTheDocument();
      expect(await findByText(`${word} desc`)).toBeInTheDocument();
    }
  });
});
