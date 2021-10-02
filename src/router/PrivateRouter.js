import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../context/AuthContextProvider";

const PrivateRouter = (props) => {
  console.log("props: ", props);
  let { currentUser } = useAuth();

  //!Just for testing purpose
  // currentUser = {
  //   email: "a@gmailcom",
  // };

  return currentUser ? (
    <Route path={props.path} component={props.component} />
  ) : (
    <Redirect to="/login" />
  );
};

export default PrivateRouter;
