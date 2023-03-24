import axios from "axios";
import { BASE_URL, ResourceID, userID } from "./interfaces";

export async function submitComment(
  resourceID: ResourceID,
  userID: userID,
  commentMessage: string
): Promise<void> {
  const requestBody = {
    user_id: userID,
    message: commentMessage,
  };
  await axios.post(`${BASE_URL}/resources/comments/${resourceID}`, requestBody);
}
