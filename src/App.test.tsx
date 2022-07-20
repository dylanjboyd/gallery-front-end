import { render } from "@testing-library/react";
import { Server } from "miragejs/server";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { configureMockServer } from "./mockServer";

describe("App", () => {
  let server: Server;

  beforeEach(() => {
    server = configureMockServer();
  });

  afterAll(() => {
    server.shutdown();
  });

  it("renders full app", async () => {
    // Act
    const { findByText } = render(<App />, { wrapper: BrowserRouter });

    // Assert
    for (const word of ["1", "2"]) {
      expect(await findByText(`Photo ${word}`)).toBeInTheDocument();
      expect(
        await findByText(`Description for photo ${word}`)
      ).toBeInTheDocument();
    }
  });
});
