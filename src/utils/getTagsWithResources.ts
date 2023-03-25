import axios from "axios";
import { BASE_URL, ITagResource } from "./interfaces";

export async function getTagsWithResources(): Promise<ITagResource[]> {
  //get request to API for all tags for every resourceID
  const allTagsWithResources = await axios.get(`${BASE_URL}/tags/tagresource`);
  return allTagsWithResources.data;
}
