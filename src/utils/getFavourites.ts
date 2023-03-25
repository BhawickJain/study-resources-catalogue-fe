import axios from "axios";
import { IDBResources } from "./getResources";
import { BASE_URL, IResource, userID } from "./interfaces";

export async function getFavourites(userID: userID): Promise<IResource[]> {
  try {
    const response = await axios.get(`${BASE_URL}/user/${userID}/favourites`);
    const resources: IResource[] = response.data.map((row: IDBResources) => ({
      resourceID: row.resource_id,
      submitter: row.submitter,
      title: row.title,
      author: row.author,
      URL: row.url,
      timestamp: row.time_stamp,
      summary: row.summary,
      reccomendationText: row.recommendation_text,
      reccomendationOptions: row.recommendation_option,
    }));
    return resources;
  } catch (error) {
    console.log(error);
    return [];
  }
}
