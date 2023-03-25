import axios from "axios";
import { BASE_URL, ResourceID } from "./interfaces";

export interface IPreferences {
  likes: number;
  dislikes: number;
}

export async function getPreferences(
  resourceID: ResourceID
): Promise<IPreferences> {
  const url = `${BASE_URL}/resources/preference/${resourceID}`;
  const response = await axios.get(url);
  const preferences = {
    likes: response.data.likes,
    dislikes: response.data.dislikes,
  };
  return preferences;
}
