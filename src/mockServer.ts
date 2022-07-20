import { createServer } from "miragejs";

const configureMockServer = () =>
  createServer({
    seeds(server) {
      server.db.loadData({
        photos: [
          {
            title: "Photo one",
            description: "Description for photo one",
            imgSrc: "https://picsum.photos/id/1/200",
          },
          {
            title: "Photo two",
            description: "Description for photo two",
            imgSrc: "https://picsum.photos/id/2/200",
          },
          {
            title: "Photo three",
            description: "Description for photo three",
            imgSrc: "https://picsum.photos/id/3/200",
          },
        ],
      });
    },

    routes() {
      this.get("/api/v1/photos", (schema) => {
        return schema.db.photos;
      });
    },
  });

export { configureMockServer };
