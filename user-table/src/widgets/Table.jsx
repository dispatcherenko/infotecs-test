import "./Table.scss";

const Table = ({ users }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Maiden Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>City</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
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
