import { Component } from "react";

import NavbarComponent from "./NavbarComponent";
import Tabel from "./Tabel";
import Formulir from "./Form";

export default class Crud extends Component {
  constructor(props) {
    super(props);

    this.state = {
      makanan: [],
      nama: "",
      deskripsi: "",
      harga: 0,
      id: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  editData = (id) => {
    const makanandipilih = this.state.makanan
      .filter((makan) => makan.id === id)
      .map((filtermakanan) => {
        return filtermakanan;
      });

    this.setState({
      nama: makanandipilih[0].nama,
      deskripsi: makanandipilih[0].deskripsi,
      harga: makanandipilih[0].harga,
      id: makanandipilih[0].id,
    });
  };

  deleteData = (id) => {
    const makanaBaru = this.state.makanan
      .filter((makan) => makan.id !== id)
      .map((filtermakanan) => {
        return filtermakanan;
      });

    this.setState({
      makanan: makanaBaru,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.id === "") {
      this.setState({
        makanan: [
          ...this.state.makanan,
          {
            id: this.state.makanan.length + 1,
            nama: this.state.nama,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga,
          },
        ],
      });
    } else {
      const makanandipilih = this.state.makanan
        .filter((makan) => makan.id !== this.state.id)
        .map((filtermakanan) => {
          return filtermakanan;
        });

      this.setState({
        makanan: [
          ...makanandipilih,
          {
            id: this.state.makanan.length + 1,
            nama: this.state.nama,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga,
          },
        ],
      });
    }

    this.setState({
      nama: "",
      deskripsi: "",
      harga: 0,
      id: "",
    });
  };

  render() {
    return (
      <>
        <NavbarComponent />
        <div className="container mt-5">
          <Tabel
            makanan={this.state.makanan}
            editData={this.editData}
            deleteData={this.deleteData}
          />
          <Formulir
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </>
    );
  }
}
