import axios from "axios";
import {
  IContentType,
  IRecommendationOption,
  Itag,
  IWeek,
} from "../components/SubmitResource";
import { BASE_URL } from "./interfaces";

export async function getTags(): Promise<Itag[]> {
  const res = await axios.get(`${BASE_URL}/tablename/tags`);
  return res.data;
}

export async function getWeeks(): Promise<IWeek[]> {
  const res = await axios.get(`${BASE_URL}/tablename/buildweeks`);
  return res.data;
}

export async function getRecommendationOptions(): Promise<
  IRecommendationOption[]
> {
  const res = await axios.get(`${BASE_URL}/tablename/recommendations`);
  return res.data;
}

export async function getContentTypes(): Promise<IContentType[]> {
  const res = await axios.get(`${BASE_URL}/tablename/contenttypes`);
  return res.data;
}
