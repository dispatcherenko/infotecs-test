import "./styles.scss";
import { useCallback, useEffect, useState } from "react";
import MainPage from "./pages/MainPage";
import UserInfoModal from "@widgets/UserInfoModal";
import Modal from "@shared/UI/Modal";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState();

  const [error, setError] = useState();

  // Получение данных с апи
  const fetchData = useCallback(async () => {
    try {
      setError(null);

      let res;

      res = await fetch(`http://localhost:3001/api/users`, {
        method: "GET",
      })

      const data = await res.json();
      setUsers(data.users);
    } catch {
      setError(
        "Произошла ошибка при загрузке данных, пожалуйста, попробуйте позже."
      );
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Вызывается при попытке закрыть модальное окно с описанием пользователя
  const onClose = () => {
    setSelectedUser(null);
  };

  return (
    <div className="App">
      {error && <Modal>{error}</Modal>}
      {selectedUser && <UserInfoModal user={selectedUser} onClose={onClose} />}

      <MainPage
        users={users}
        setSelectedUser={setSelectedUser}
      />
    </div>
  );
}

export default App;
