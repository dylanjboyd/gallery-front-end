import { Photo } from "../../models/Photo";
import { get } from "../xhr";

const getPhotos = () => get<Photo[]>("/api/v1/photos");

export { getPhotos };
