import React from "react";
import "./App.scss";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const homepage = () => <HomePage />;
  const loginpage = ({ history }) => <LoginPage history={history} />;
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={homepage} />
        <Route path="/login" component={loginpage} />
      </div>
    </Router>
  );
}

export default App;
