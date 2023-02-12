import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

function App() {
  const [listadoDePrestamos, setListadoDePrestamos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/prestamos").then((response) => {
      setListadoDePrestamos(response.data);
    });
  });

  return (
    <div className="App">
      <h1>Listado de prestamos</h1>
      {listadoDePrestamos.map((value, key) => {
        return (
          <Card className="text-center border-dark m-2">
            <Card.Header className="bg-success text-light">
              Prestamo # {value.id}
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Elemento Prestado: {value.elemento_prestado}
              </Card.Text>
              <Card.Text>Prestatario: {value.prestatario}</Card.Text>
              <Card.Text>Fecha de Prestamo: {value.fecha_prestamo}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default App;
