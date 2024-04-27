import React, { Component } from "react";

const makanan = [
  {
    nama: "soto",
    harga: 12000,
  },
  {
    nama: "rendang",
    harga: 1000,
  },
  {
    nama: "bakso",
    harga: 16000,
  },
];

const total = makanan.reduce((totalh, makanan) => {
  return totalh + makanan.harga;
}, 0);

export default class Map extends Component {
  render() {
    return (
      <>
        <div>
          <h1>Daftar Makanan </h1>

          <ol>
            {makanan.map((makan, index) => {
              return (
                <li key={index + 1}>
                  {makan.nama} - Harga :{makan.harga}
                </li>
              );
            })}
          </ol>
          <ul>
            {makanan
              .filter((makan) => makan.harga > 15000)
              .map((makan, index) => {
                return (
                  <li key={index + 1}>
                    {makan.nama} - Harga :{makan.harga}
                  </li>
                );
              })}
          </ul>
          <h2>Total Harga semua makanan : {total}</h2>
        </div>
      </>
    );
  }
}
