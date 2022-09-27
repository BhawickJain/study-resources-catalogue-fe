import axios from "axios";
import { IUser } from "./interfaces";

interface IDBUSer {
  user_id: number;
  user_name: string;
  is_faculty: boolean;
}
export async function getUserList(): Promise<IUser[]> {
  const res = await axios.get(
    `https://study-resource-catalog-c5c3.herokuapp.com/tablename/users`
  );
  const listOfUsers: IUser[] = [];

  res.data.forEach((item: IDBUSer) => {
    listOfUsers.push({
      userID: item.user_id,
      username: item.user_name,
      isFaculty: item.is_faculty,
    });
  });
  // console.log(res.data)
  return listOfUsers;
}
