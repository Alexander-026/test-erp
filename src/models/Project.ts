export interface Project {
  id: number;
  idDepClient: string;
  idProject: string;
  timestamp: string;
}

export type NewProject = Omit<Project, "id">;
