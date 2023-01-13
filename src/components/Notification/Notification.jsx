import React from "react";
import Toast from "react-bootstrap/Toast";
import Button from "react-bootstrap/Button";
import { X } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { closeNotification } from "../../redux/Slice";

function Notification() {
  const dispatch = useDispatch();
  const { showNotify, message } = useSelector((state) => state.usersState);

  const handleCloseAlert = () => {
    dispatch(closeNotification());
  };

  return (
    <div className="notification-container">
      <Toast
        show={showNotify}
        onClose={handleCloseAlert}
        className="notification"
      >
        <Toast.Body>{message}</Toast.Body>
        <Button onClick={handleCloseAlert} variant="" className="mb-1" style={{fontSize:"1.5rem"}}>
          <X />
        </Button>
      </Toast>
    </div>
  );
}

export default Notification;
