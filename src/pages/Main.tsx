import { useState, useCallback, useEffect } from "react";
import ClientTable from "../components/Tables/ClientTable";
import Creator from "../components/Creator/Creator";
import styles from "./Main.module.scss";
import { Dep } from "../models/Dep";
import { Client } from "../models/Client";
import { NewProject, Project } from "../models/Project";
import { DepService } from "../api/DepService";
import { ProjectService } from "../api/ProjectService";
import { ClientService } from "../api/ClientService";
import ProjectTable from "../components/Tables/ProjectTable";

const Main = () => {
  const [deps, setDeps] = useState<Dep[]>([]);
  const [clinets, setClients] = useState<Client[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [createLoading, setCreateLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);

  const refresh = useCallback(async (): Promise<void> => {
    try {
      setLoading(true);
      const depResult = await DepService.getAll();
      const clientsResult = await ClientService.getAll();
      const projectsResult = await ProjectService.getAll();
      setDeps(depResult);
      setClients(clientsResult);
      setProjects(projectsResult);
      setLoading(false);
    } catch (error: any) {
      console.log("erroor", error);
      setLoading(false);
      // setError(error)
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const handleCreateProject = async (body: NewProject): Promise<void> => {
    try {
      setCreateLoading(true);
      await ProjectService.create(body);
      const projectsResult = await ProjectService.getAll();
      setProjects(projectsResult);
      setCreateLoading(false);
    } catch (error) {
      setCreateLoading(false);
    } finally {
      setCreateLoading(false);
    }
  };

  const handleDeleteProject = async (id: number): Promise<void> => {
    try {
      await ProjectService.delete(id);
      const projectsResult = await ProjectService.getAll();
      setProjects(projectsResult);
    } catch (error) {}
  };

  return (
    <div className={styles.main}>
      <Creator
        loading={loading}
        createLoading={createLoading}
        handleCreateProject={(body: NewProject) => handleCreateProject(body)}
        deps={deps}
      />
      <ClientTable loading={loading} clients={clinets} />
      <ProjectTable
        loading={loading}
        projects={projects}
        handleDeleteProject={(id: number) => handleDeleteProject(id)}
      />
    </div>
  );
};

export default Main;
