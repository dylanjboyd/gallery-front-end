import { render } from "@testing-library/react";

import { Photo } from "../../../models/Photo";
import FullScreenViewer from "./index";

describe("FullScreenViewer", () => {
  it("renders image title", () => {
    // Arrange
    const photo: Photo = {
      title: "Test title",
      description: "Test description",
      imgSrc: "https://example.com",
      fullImgSrc: "https://example.com",
    };

    // Act
    const { getByText } = render(
      <FullScreenViewer
        photo={photo}
        onClose={() => {
          // Do nothing when closing
        }}
        onPhotoSelected={() => {
          // Do nothing when photo selected
        }}
      />
    );

    // Assert
    expect(getByText(/Test title/)).toBeInTheDocument();
  });

  it("doesn't show when no image provided", () => {
    // Act
    const { queryByText } = render(
      <FullScreenViewer
        photo={undefined}
        onClose={() => {
          // Do nothing when closing
        }}
        onPhotoSelected={() => {
          // Do nothing when photo selected
        }}
      />
    );

    // Assert
    expect(queryByText(/Test title/)).toBeNull();
  });
});
