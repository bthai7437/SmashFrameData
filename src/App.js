import React, { Component } from "react";
import Layout from "./containers/Layout/Layout";
import FrameTable from "./components/FrameTable/FrameTable";
import CharacterSelect from "./containers/Layout/SelectScreen/SelectScreen";
import Auth from "./containers/Auth/Auth";
import Nav from "./components/UI/NavBar/NavBar";
import AppStyle from "./App.module.css";

class App extends Component {
  render() {
    return (
      <div className={AppStyle.BackgroundImage}>
        <Nav />
        <div className={AppStyle.BackgroundImage}>
          <Layout>
            <Auth />
          </Layout>
        </div>
      </div>
    );
  }
}

export default App;
