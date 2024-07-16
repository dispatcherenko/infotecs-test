import { useRef, useState } from "react";
import "./Table.scss";

const Table = ({ users, setSelectedUser }) => {
  const [colWidths, setColWidths] = useState({});
  const thRefs = useRef([]);

  const HandleMouseDown = (e, index) => {
    e.stopPropagation();

    const startX = e.clientX;
    const startWidth = thRefs.current[index].getBoundingClientRect().width;

    const onMouseMove = (e) => {
      const newWidth = startWidth + (e.clientX - startX);
      setColWidths((prevWidths) => ({
        ...prevWidths,
        [index]: Math.max(newWidth, 50),
      }));
    };

    const onMouseUp = () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          {[
            "ID",
            "First Name",
            "Maiden Name",
            "Last Name",
            "Age",
            "Gender",
            "City",
            "Address",
          ].map((header, index) => (
            <th
              key={header}
              ref={(el) => (thRefs.current[index] = el)}
              style={{
                width: colWidths[index] ? `${colWidths[index]}px` : "auto",
              }}
            >
              {header}
              <div
                className="resizer"
                onMouseDown={(e) => HandleMouseDown(e, index)}
              />
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id} onClick={() => setSelectedUser(user)}>
            <td>{user.id}</td>
            <td>{user.firstName}</td>
            <td>{user.maidenName}</td>
            <td>{user.lastName}</td>
            <td>{user.age}</td>
            <td>{user.gender}</td>
            <td>{user.address.city}</td>
            <td>{user.address.address}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
