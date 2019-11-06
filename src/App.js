import React, { Component } from "react";
import Layout from "./containers/Layout/Layout";
import FrameTable from "./components/FrameTable/FrameTable";
import CharacterSelect from "./containers/Layout/CharacterList/CharacterList";
import "./App.module.css";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <CharacterSelect />
        </Layout>
      </div>
    );
  }
}

export default App;
