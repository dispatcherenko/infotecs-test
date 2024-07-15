import { useEffect, useState } from "react";
import { useFetch } from "./hooks/useFetch";
import MainPage from "./pages/MainPage";

import "./styles.scss";

function App() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sort, setSort] = useState({ sortBy: "none", order: "asc" });

  const [fetchData, isLoading, postError] = useFetch(async () => {
    searchQuery === ""
      ? fetch(
          `https://dummyjson.com/users?limit=0&sortBy=${sort.sortBy}&order=${sort.order}`
        )
          .then((res) => res.json())
          .then((data) => {
            setUsers(data.users);
          })
      : setTimeout(() => {
          fetch(
            `https://dummyjson.com/users/search?q=${searchQuery}&limit=0&sortBy=${sort.sortBy}&order=${sort.order}`
          )
            .then((res) => res.json())
            .then((data) => {
              setUsers(data.users);
            });
        }, 300);
  });

  useEffect(() => {
    fetchData();
    console.log(searchQuery);
  }, [searchQuery, sort]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="App">
      <MainPage
        searchQuery={searchQuery}
        handleSearch={handleSearch}
        users={users}
        sort={sort}
        setSort={setSort}
      />
    </div>
  );
}

export default App;
