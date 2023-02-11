import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.myReducer.current); //reading data
  return (
    <div>
      <center>
        <h2>User</h2>
        <div>Username: {user?.userName}</div>
        <div>Age: {user?.Age}</div>
        <div>eMail: {user?.eMail}</div>
        <div>Stack: {user?.stack}</div>
      </center>
    </div>
  );
};

export default Profile;
