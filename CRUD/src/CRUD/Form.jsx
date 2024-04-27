import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Formulir({ nama, deskripsi, harga, handleChange, handleSubmit }) {
  return (
    <div className="mt-5">
      <Row>
        <Col>
          <h1>Tambah Data</h1>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="nama">
              <Form.Label>Nama Makanan :</Form.Label>
              <Form.Control
                type="text"
                name="nama"
                value={nama}
                onChange={handleChange}
                placeholder=""
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="deksripsi">
              <Form.Label>Deskripsi :</Form.Label>
              <Form.Control
                as="textarea"
                name="deskripsi"
                rows={3}
                value={deskripsi}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="harga">
              <Form.Label>Harga :</Form.Label>
              <Form.Control
                type="number"
                name="harga"
                value={harga}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Formulir;
