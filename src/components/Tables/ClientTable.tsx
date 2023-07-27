import { FC } from "react";
import { Oval } from "react-loader-spinner";
import { Client } from "../../models/Client";
import styles from "./Table.module.scss";

type ClientTableProps = {
  clients: Client[];
  loading: boolean;
};
const ClientTable: FC<ClientTableProps> = ({ clients, loading }) => {
  return (
    <>
      <table className={styles.client}>
        <thead>
          <tr>
            <th>ID_DEP_CLIENT</th>
            <th>NAME_CLIENT</th>
          </tr>
        </thead>
        {!loading && (
          <tbody>
            {clients.map((client) => {
              return (
                <tr key={client.id}>
                  <td>{client.idDep}</td>
                  <td>{client.name}</td>
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

export default ClientTable;
