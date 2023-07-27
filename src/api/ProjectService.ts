import { NewProject, Project } from "../models/Project";
import { GET, POST,DELETE } from "./http";

const API_URL = "/projects";



export class ProjectService {
  public static async getAll(): Promise<Project[]> {
    return GET<Project[]>(API_URL);
  }
  public static async create(value: NewProject): Promise<NewProject> {
    return POST<NewProject>(API_URL, value);
  }
  public static async delete(id: number): Promise<boolean> {
    return DELETE<boolean>(`${API_URL}/${id}`);
  }
}
