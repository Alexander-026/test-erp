import { Client } from "../models/Client";
import { GET } from "./http";

const API_URL = "/clients";

export class ClientService {
  public static async getAll(): Promise<Client[]> {
    return GET<Client[]>(API_URL);
  }
}
