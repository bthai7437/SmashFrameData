import React, { Component } from "react";
import Layout from "./containers/Layout/Layout";
import NavBar from "./containers/Layout/NavBar";
import SelectScreen from "./containers/Layout/SelectScreen";
import "./App.module.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <SelectScreen/>
      </div>
      );
  }
}

export default App;