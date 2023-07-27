import { Dep } from "../models/Dep";
import { GET } from "./http";

const API_URL = "/deps";

export class DepService {
  public static async getAll(): Promise<Dep[]> {
    return GET<Dep[]>(API_URL);
  }
}
