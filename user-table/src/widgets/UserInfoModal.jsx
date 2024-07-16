import Modal from "@shared/UI/Modal";

import React from "react";

const UserInfoModal = ({ user, onClose }) => {
  return (
    <Modal onClose={onClose} closable>
      <div className="info">
        <h2>
          {user.firstName} {user.maidenName} {user.lastName}
        </h2>
        <p>
          <strong>Age:</strong> {user.age}
        </p>
        <p>
          <strong>Address:</strong> {user.address.city}, {user.address.address}
        </p>
        <p>
          <strong>Height:</strong> {user.height}
        </p>
        <p>
          <strong>Weight:</strong> {user.weight}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
      </div>
    </Modal>
  );
};

export default UserInfoModal;
