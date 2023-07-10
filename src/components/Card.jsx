import React from "react";
export default function Card(props) {
  return (
    <div className="ola">
      <button onClick={props.onClose}>X</button>

      <h2>Id:{props.id}</h2>
      <h2>nombre:{props.name}</h2>
      <h2>Status:{props.status}</h2>
      <h2>Species:{props.species}</h2>
      <h2>Gender:{props.gender}</h2>
      <h2>Origin:{props.origin}</h2>
      <div>
        <img src={props.image} alt="Aqui iria la imagen" />
      </div>
    </div>
  );
}
