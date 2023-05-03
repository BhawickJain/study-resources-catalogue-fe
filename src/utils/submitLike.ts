import axios from "axios";
import { BASE_URL, Preference, ResourceID, userID } from "./interfaces";

export async function submitPreferences(
  resourceID: ResourceID,
  userID: userID,
  preference: Preference
): Promise<void> {
  const url = `${BASE_URL}/resources/preferences`;
  await axios.post(url, {
    user_id: userID,
    resource_id: resourceID,
    preferences: preference,
  });
}
