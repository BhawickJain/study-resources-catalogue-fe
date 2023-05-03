import axios from "axios";
import { BASE_URL, userID } from "./interfaces";

export async function postFavourites(
  userID: userID,
  resourceID: number
): Promise<void> {
  await axios.post(`${BASE_URL}/user/${userID}/favourites/${resourceID}`);
}
