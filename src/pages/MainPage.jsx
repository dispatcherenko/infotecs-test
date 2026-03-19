import TableComponent from "../widgets/Table";

import "./MainPage.scss";

const MainPage = (props) => {
  return (
    <main className="main">
      <TableComponent
        users={props.users}
        setSelectedUser={props.setSelectedUser}
      />
    </main>
  );
};

export default MainPage;
