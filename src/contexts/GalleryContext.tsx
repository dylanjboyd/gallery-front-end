import React from "react";

import { getPhotos } from "../adapters/galleryPageAdapter";
import { Photo } from "../models/Photo";

type GalleryContextType = {
  photos: Photo[];
  fetchPhotos: () => Promise<void>;
};

const GalleryContext = React.createContext<GalleryContextType>({
  photos: [],
  fetchPhotos: async () => {
    // Nothing goes here.
  },
});

type GalleryProviderProps = {
  children: React.ReactNode;
};

const GalleryProvider = ({ children }: GalleryProviderProps) => {
  const [photos, setPhotos] = React.useState<Photo[]>([]);

  const fetchPhotos = async () => {
    const photos = await getPhotos();
    setPhotos(photos.data);
  };

  return (
    <GalleryContext.Provider value={{ photos, fetchPhotos }}>
      {children}
    </GalleryContext.Provider>
  );
};

const useGallery = () => {
  const context = React.useContext(GalleryContext);
  if (context === undefined) {
    throw new Error("useGallery must be used within a GalleryContext");
  }
  return context;
};

export { GalleryContext, GalleryProvider, useGallery };
