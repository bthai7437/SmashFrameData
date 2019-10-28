import React, { Component } from "react";
import Axios from "../../axios";
import FrameData from "../FrameTable/FrameData/FrameData";
import MoveInput from "../FrameTable/MoveInput/MoveInput";
import FrameStyle from "./FrameTable.module.css";

class FrameTable extends Component {
  state = {
    characterData: {},
    loaded: false,
    error: false
  };

  componentDidMount() {
    Axios.get("/characters/name/ZeroSuitSamus/moves?expand=true")
      .then(res => {
        this.setState({ characterData: res.data, loaded: true });
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: true });
      });
  }

  render() {
    if (this.state.loaded) {
      console.log(this.state.characterData);
      // console.log(this.state.characterData[0].BaseDamage.Normal); // base damage
      // console.log(this.state.characterData[0].HitboxActive.Frames); // Active Frames

      //dynamically add Move input and Frame data in a custom Table
    }
    return (
      <div className={FrameStyle.FrameData}>
        <MoveInput />
        <FrameData />
      </div>
    );
  }
}

export default FrameTable;
