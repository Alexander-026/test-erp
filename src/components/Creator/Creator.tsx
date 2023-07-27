import { FC, FormEvent } from "react";
import { Dep } from "../../models/Dep";
import setCurrentDate from "../../utils/currentDate";
import styles from "./Creator.module.scss";
import { NewProject } from "../../models/Project";
import { Oval } from "react-loader-spinner";

type CreatorProps = {
  deps: Dep[];
  loading: boolean;
  createLoading: boolean;
  handleCreateProject: (body: NewProject) => Promise<void>;
};

const loader = (
  <Oval
    height={15}
    width={15}
    color="gray"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    ariaLabel="oval-loading"
    secondaryColor="#4fa94d"
    strokeWidth={2}
    strokeWidthSecondary={2}
  />
);

const Creator: FC<CreatorProps> = ({
  deps,
  loading,
  createLoading,
  handleCreateProject,
}) => {
  const currentDate = setCurrentDate("donts");
  const currentDateNums = setCurrentDate("numbers");

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const clientId: HTMLSelectElement | null = document.getElementById(
      "client_id"
    ) as HTMLSelectElement;
    const projectId: HTMLSelectElement | null = document.getElementById(
      "project_id"
    ) as HTMLSelectElement;

    if (clientId && projectId) {
      handleCreateProject({
        idDepClient: clientId.value,
        idProject: projectId.value,
        timestamp: currentDate,
      });
    }
  };

  return (
    <section className={styles.creator}>
      <header className={styles.creatorHeader}>
        <div className={styles.creatorHeaderLogo}>
          <img src="logo.png" alt="logo" />
          <span>ERP "ba3a"</span>
        </div>
        <div className={styles.creatorHeaderDate}>
          <time dateTime={currentDate}>{currentDate}</time>
        </div>
      </header>
      <form onSubmit={submitHandler} className={styles.creatorForm}>
        <div className={styles.creatorFormItem}>
          <label htmlFor="client_id">Клиент №:</label>
          {loading ? (
            loader
          ) : (
            <select id="client_id" className={styles.creatorFormItemSelect}>
              {deps.map((dep) => {
                const value = `${dep.id}-${dep.name}`;
                return (
                  <option key={dep.id} value={value}>
                    {dep.id}-{dep.name}
                  </option>
                );
              })}
            </select>
          )}
        </div>
        <div className={styles.creatorFormItem}>
          <label htmlFor="project_id">Проект №:</label>
          {loading ? (
            loader
          ) : (
            <select id="project_id" className={styles.creatorFormItemSelect}>
              {deps.map((dep) => {
                const value = `${dep.id}-${dep.name}-${currentDateNums}`;
                return (
                  <option key={dep.id} value={value}>
                    {value}
                  </option>
                );
              })}
            </select>
          )}
        </div>
        <div className={styles.creatorBtn}>
          <button disabled={loading} type="submit">
            {loading || createLoading ? loader : "Создать проект"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Creator;
