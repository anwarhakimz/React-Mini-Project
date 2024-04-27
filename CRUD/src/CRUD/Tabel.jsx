// import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const Tabel = ({ makanan, editData, deleteData }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>No</th>
          <th>Nama Makanan</th>
          <th>Deskripsi</th>
          <th>Harga</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {makanan.map((makan, index) => {
          return (
            <tr key={index + 1}>
              <td>{index + 1}</td>
              <td>{makan.nama}</td>
              <td>{makan.deskripsi}</td>
              <td>{makan.harga}</td>
              <td className=" d-flex justify-content-end gap-5">
                <Button
                  className="btn btn-primary"
                  onClick={() => editData(makan.id)}
                >
                  Edit
                </Button>
                <Button
                  className="btn btn-danger"
                  onClick={() => deleteData(makan.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Tabel;
