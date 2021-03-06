import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import Header from "../components/Header";
import Main from "../components/Main";
import io from "socket.io-client";
import { MESSAGE_HOST } from 'config'

HomePage.propTypes = {};

function HomePage(props) {
  var history = useHistory();
  const { userInfor } = useSelector((state) => state.login);
  if (userInfor == null) {
    history.push("/login");
    return <></>;
  } else {
    var socket = io(MESSAGE_HOST);
    console.log("socket");
    socket.emit("online", { userId: userInfor._id, name: userInfor.name });
  }
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Main />
      </main>
    </div>
  );
}

export default HomePage;
