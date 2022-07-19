import { createServer } from "miragejs";

const configureMockServer = () =>
  createServer({
    seeds(server) {
      server.db.loadData({
        photos: [
          {
            title: "Photo one",
            description: "Description for photo one",
            imgSrc: "",
          },
          {
            title: "Photo two",
            description: "Description for photo two",
            imgSrc: "",
          },
          {
            title: "Photo three",
            description: "Description for photo three",
            imgSrc: "",
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
