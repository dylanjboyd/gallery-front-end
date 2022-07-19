import { get } from "../xhr";

const getPhotos = () => get("/api/v1/photos");
