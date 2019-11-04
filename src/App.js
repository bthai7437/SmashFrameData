import React, { Component } from "react";
import Layout from "./containers/Layout/Layout";
import FrameTable from "./components/FrameTable/FrameTable";
import "./App.module.css";

class App extends Component {
  render() {
    return (
      <div>
        <Layout />
      </div>
    );
  }
}

export default App;
