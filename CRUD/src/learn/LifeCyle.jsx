import React, { Component } from "react";
import SubLifeCyle from "./SubLifeCyle";

export default class LifeCyle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      makanan: "bakso",
      data: [],
      tampilhalaman: false,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.setState({
          data: json,
        });
      });
  }

  ubahMakanan(value) {
    this.setState({
      makanan: value,
    });
  }

  render() {
    return (
      <>
        <div>{this.state.makanan}</div>
        {this.state.tampilhalaman && (
          <SubLifeCyle ubahMakanan={(value) => this.ubahMakanan(value)} />
        )}
        <button
          onClick={() =>
            this.setState({ tampilhalaman: !this.state.tampilhalaman })
          }
        >
          Ubah
        </button>
      </>
    );
  }
}
