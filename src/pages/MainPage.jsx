import TableComponent from "../widgets/Table";
import Filters from "../widgets/Filters";

import "./MainPage.scss";

const MainPage = (props) => {
  return (
    <main className="main">
      <Filters
        searchQuery={props.searchQuery}
        handleSearch={props.handleSearch}
        sort={props.sort}
        setSort={props.setSort}
      />
      <TableComponent
        users={props.users}
        setSelectedUser={props.setSelectedUser}
      />
    </main>
  );
};

export default MainPage;
