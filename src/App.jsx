import "./styles.scss";
import { useCallback, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import MainPage from "./pages/MainPage";
import UserInfoModal from "@widgets/UserInfoModal";
import Modal from "@shared/UI/Modal";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState();

  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery] = useDebounce(searchQuery, 500);
  const [sort, setSort] = useState({ sortBy: "none", order: "asc" });

  const [error, setError] = useState();

  const fetchData = useCallback(async () => {
    try {
      setError(null);

      let res;
      debouncedQuery === ""
        ? (res = await fetch(
            `https://dummyjson.com/users?limit=0&sortBy=${sort.sortBy}&order=${sort.order}`
          ))
        : (res = await fetch(
            `https://dummyjson.com/users/search?q=${debouncedQuery}&limit=0&sortBy=${sort.sortBy}&order=${sort.order}`
          ));

      const data = await res.json();
      setUsers(data.users);
    } catch {
      setError(
        "Произошла ошибка при загрузке данных, пожалуйста, попробуйте позже."
      );
    }
  }, [debouncedQuery, sort]);

  useEffect(() => {
    fetchData();
  }, [debouncedQuery, sort]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const onClose = () => {
    setSelectedUser(null);
  };

  return (
    <div className="App">
      {error && <Modal>{error}</Modal>}
      {selectedUser && <UserInfoModal user={selectedUser} onClose={onClose} />}

      <MainPage
        searchQuery={searchQuery}
        handleSearch={handleSearch}
        users={users}
        sort={sort}
        setSort={setSort}
        setSelectedUser={setSelectedUser}
      />
    </div>
  );
}

export default App;
