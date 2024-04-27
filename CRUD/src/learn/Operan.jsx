import React, { Component } from "react";

export class Operan extends Component {
  render() {
    const { makanan, gantiMakanan } = this.props;
    return (
      <>
        <div>Operan state Yang menjadi makanan : {makanan}</div>
        <button onClick={() => gantiMakanan("Keju")}>Ganti Makanan</button>
      </>
    );
  }
}

export default Operan;
