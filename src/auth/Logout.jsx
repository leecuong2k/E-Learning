import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router";
import * as actions from "../store/actions/auth";

const Logout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.logout());
  }, [dispatch]);

  return <Redirect to="/" />;
};

export default Logout;
