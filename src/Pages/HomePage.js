import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import Header from "../components/Header";
import Main from "../components/Main";
import io from "socket.io-client";

HomePage.propTypes = {};

function HomePage(props) {
  var history = useHistory();
  const { userInfor } = useSelector((state) => state.login);
  if (userInfor == null) {
    history.push("/login");
    return <></>;
  } else {
    var socket = io("http://192.168.1.9:3003");
    console.log("socket");
    socket.emit("online", { userId: userInfor._id, name: userInfor.name });
    return (
      <div>
        <header>
          <Header />
        </header>
        <main>
          <Main socket={socket} />
        </main>
      </div>
    );
  }
}

export default HomePage;
