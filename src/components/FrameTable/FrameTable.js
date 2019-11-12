import React, { Component } from "react";
import Axios from "../../axios";
import FrameData from "../FrameTable/FrameData/FrameData";
import MoveInput from "../FrameTable/MoveInput/MoveInput";
import FrameStyle from "./FrameTable.module.css";
import { Table } from "react-bootstrap";
import { withRouter } from "react-router-dom";
class FrameTable extends Component {
  state = {
    characterImgSrc: "",
    characterData: [],
    loaded: false,
    error: false
  };

  componentDidMount() {
    console.log(this.props);
    Axios.get(`/characters/name/${this.props.match.params.name}/moves`)
      .then(res => {
        this.setState({ characterData: res.data, loaded: true });
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: true });
      });
    Axios.get(`/characters/name/${this.props.match.params.name}`).then(res => {
      this.setState({ characterImgSrc: res.data, loaded: true });
    });
  }

  render() {
    let moveList = [];
    if (this.state.loaded) {
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
        <div>
          <Table bordered hover variant="dark" responsive>
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
      </div>
    );
  }
}

export default withRouter(FrameTable);
