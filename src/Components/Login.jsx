import React from "react";
import { useDispatch } from "react-redux";
import { loginUser, logOutUser } from "./ReduxState/ReduxState";

const Login = () => {
  const dispatch = useDispatch(); //function usage 👇🏼
  return (
    <div>
      <center>
        <button
          onClick={() => {
            dispatch(
              //here 👇🏼
              loginUser({
                userName: "Isaac",
                Age: "20",
                eMail: "isaacetor7@gmail.com",
                stack: "MERNstack",
              })
            );
          }}
        >
          Login
        </button>

        <button
          onClick={() => {
            dispatch(logOutUser());
          }}
        >
          Logout
        </button>
      </center>
    </div>
  );
};

export default Login;
