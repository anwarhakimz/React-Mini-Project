import React, { Component } from "react";

export default class SubLifeCyle extends Component {
  componentWillUnmount() {
    this.props.ubahMakanan("sate");
  }

  render() {
    return <div>Component Sub LifeCycle</div>;
  }
}
