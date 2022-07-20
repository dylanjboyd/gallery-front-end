import { createServer } from "miragejs";

const photoIds = [...Array(20).keys()].map((x) => x + 1);
const mockPhotos = photoIds.map((id) => ({
  title: `Photo ${id}`,
  description: `Description for photo ${id}`,
  imgSrc: `https://picsum.photos/id/${id}/200`,
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
