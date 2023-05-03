import axios from "axios";
import { BASE_URL, userID } from "./interfaces";

export async function deleteFavourites(
  userID: userID,
  resourceID: number
): Promise<void> {
  await axios.delete(`${BASE_URL}/user/${userID}/favourites/${resourceID}`);
}
