import { createServer } from "miragejs";

const photoIds = Array.from({ length: 20 }, (x, i) => i).map((x) => x + 1);
const mockPhotos = photoIds.map((id) => ({
  title: `Photo ${id}`,
  description: `Description for photo ${id}`,
  imgSrc: `https://picsum.photos/id/${id}/200`,
  fullImgSrc: `https://picsum.photos/id/${id}/1024`,
}));

const configureMockServer = () =>
  createServer({
    seeds(server) {
      server.db.loadData({
        photos: mockPhotos,
      });
    },

    routes() {
      this.get("/api/v1/photos", (schema) => {
        return schema.db.photos;
      });
    },
  });

export { configureMockServer };
