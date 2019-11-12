import React, { Component } from "react";
import Layout from "./containers/Layout/Layout";
import FrameTable from "./components/FrameTable/FrameTable";
import SelectScreen from "./containers/Layout/SelectScreen/SelectScreen";
import Auth from "./containers/Auth/Auth";
import Nav from "./components/UI/NavBar/NavBar";
import AppStyle from "./App.module.css";
import { Route } from "react-router-dom";
import NavBar from "./components/UI/NavBar/NavBar";
class App extends Component {
  state = {
    selectedCharacter: null
  };

  render() {
    return (
      <div className={AppStyle.BackgroundImage}>
        <NavBar
          selectedCharacter={this.state.selectedCharacter}
          charSelector={this.changeSelectedCharacter}
        />
        <div className={AppStyle.BackgroundImage}>
          <Layout>
            <div>
              <div>
                <Route path="/" exact component={SelectScreen} />
                <Route path="/FrameTable/:name" component={FrameTable} />
              </div>
            </div>
          </Layout>
        </div>
      </div>
    );
  }
}

export default App;
