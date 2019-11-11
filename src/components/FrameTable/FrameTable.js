import React, { Component } from "react";
import Axios from "../../axios";
import FrameData from "../FrameTable/FrameData/FrameData";
import MoveInput from "../FrameTable/MoveInput/MoveInput";
import FrameStyle from "./FrameTable.module.css";
import { Table } from "react-bootstrap";
class FrameTable extends Component {
  state = {
    characterImgSrc: "",
    characterData: [],
    loaded: false,
    error: false
  };

  componentDidMount() {
    Axios.get(`/characters/name/${this.props.selectedCharacter}/moves`)
      .then(res => {
        this.setState({ characterData: res.data, loaded: true });
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: true });
      });
    Axios.get(`/characters/name/${this.props.selectedCharacter}`).then(res => {
      this.setState({ characterImgSrc: res.data, loaded: true });
    });
  }

  render() {
    let moveList = [];
    if (this.state.loaded) {
      console.log(this.state.characterData);
      //console.log(this.state.characterData[0]);
      // console.log(this.state.characterData[0].BaseDamage.Normal); // base damage
      // console.log(this.state.characterData[0].HitboxActive.Frames); // Active Frames
      // dynamically add Move input and Frame data in a custom Table
      moveList = this.state.characterData.map(move => {
        return (
          <tr key={move.InstanceId}>
            <td>{move.Name}</td>
            <td>{move.HitboxActive}</td>
            <td>{move.BaseDamage}</td>
          </tr>
        );
      });
    }

    return (
      <div className={FrameStyle.FrameData}>
        <img
          className={FrameStyle.Img}
          src={this.state.characterImgSrc.ThumbnailUrl}
          alt="ZeroSuitSamus"
        />
        <Table bordered hover variant="dark">
          <thead>
            <tr>
              <th>Input</th>
              <th>Active Hitbox</th>
              <th>Base Damage</th>
            </tr>
          </thead>
          <tbody>{moveList}</tbody>
        </Table>
      </div>
    );
  }
}

export default FrameTable;
