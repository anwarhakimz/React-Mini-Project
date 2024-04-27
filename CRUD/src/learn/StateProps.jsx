import React, { Component } from "react";
import Operan from "./Operan";

export default class stateProps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      makanan: "Bakso",
    };
  }

  gantiMakanan = (makanan_baru) => {
    this.setState({
      makanan: makanan_baru,
    });
  };

  render() {
    return (
      <>
        <div>{this.state.makanan}</div>
        <button onClick={() => this.gantiMakanan("Keju")}>Ganti Makanan</button>
        <Operan makanan={this.state.makanan} gantiMakanan={this.gantiMakanan} />
      </>
    );
  }
}
