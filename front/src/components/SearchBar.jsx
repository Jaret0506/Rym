import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [id, setId] = React.useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  var handlerSearch = () => {
    onSearch(id);
  };

  return (
    <nav className="navbar">
      <input
        className="inputsearch"
        id="inputSearch"
        value={id}
        type="search"
        placeholder="Ingresá un ID"
        onChange={(e) => handleChange(e)}
      />
      <button
        className="boton"
        onClick={() => {
          handlerSearch();
        }}
      >
        Agregar
      </button>
    </nav>
  );
}
