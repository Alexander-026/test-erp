import { FC } from "react";
import styles from "./Table.module.scss";
import { Oval } from "react-loader-spinner";
import { Project } from "../../models/Project";

type ProjectTableProps = {
  projects: Project[];
  loading: boolean;
  handleDeleteProject: (id: number) => Promise<void>;
};

const ProjectTable: FC<ProjectTableProps> = ({
  projects,
  loading,
  handleDeleteProject,
}) => {
  return (
    <>
      <table className={styles.client}>
        <thead>
          <tr>
            <th>ID</th>
            <th>ID_DEP_CLIENT</th>
            <th>ID_PROJECT</th>
            <th>DELETE</th>
          </tr>
        </thead>
        {!loading && (
          <tbody>
            {projects.map((project) => {
              return (
                <tr key={project.id}>
                  <td>{project.id}</td>
                  <td>{project.idDepClient}</td>
                  <td>{project.idProject}</td>
                  <td>
                    <button onClick={() => handleDeleteProject(project.id)}>
                      X
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        )}
      </table>
      {loading && (
        <Oval
          height={40}
          width={40}
          color="gray"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      )}
    </>
  );
};

export default ProjectTable;
