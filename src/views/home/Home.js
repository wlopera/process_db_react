import React from "react";

const Home = () => {
  const tab = "\u00A0";

  return (
    <div>
      <h1>Procesos con Bases de Datos: PYTHON-REACT</h1>
      <br />
      <p>Bases de datos MYSQL</p>
      <br />
      <h5 style={{ backgroundColor: "#76ed6b" }}>{tab} Operaciones:</h5>
      <ul>
      <li>Consultar tablas de Bases de datos</li>
      <li>Consumir Procedimientos Almacenados</li>
      </ul>
  
    </div>
  );
};

export default Home;
