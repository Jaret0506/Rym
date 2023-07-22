import React from "react";
import logo from "../components/foto.png";

export default function Presentacion() {
  return (
    <>
      <h1>
        Hola, mi nombre es Jaret Pabon y este es mi about jsx que utilizare para
        presentarme la noches de hoy. A tan solo falta de una semana para que se
        finalice el m2
      </h1>
      <div>
        <ul>
          <h1>Habilidaes</h1>
          <li>
            <h2>Procrastinacion a gran escala</h2>
          </li>
          <li>
            <h2>Hacer la fedeacion</h2>
          </li>
          <li>
            <h2>Dormir hasta 2 pm</h2>
          </li>
          <li>
            <h2>Comer como persona malviajada</h2>
          </li>
          <li>
            <h2>Caminar</h2>
          </li>
        </ul>
      </div>
      <div>
        <img
          src={logo}
          width="150px"
          height="150px"
          alt="Descripción de la imagen"
        />
      </div>
    </>
  );
}
