import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

export default function NavBar(props) {
  return (
    <nav nav className="navStilos">
      <SearchBar onSearch={props.onSearch} />

      <Link to="/about">
        <button className="aboutButton">About</button>
      </Link>
      <Link to="/favorites">
        <button className="aboutButton">Favoritos</button>
      </Link>
      <Link to="/home">
        <button className="homeButton">Home</button>
      </Link>
    </nav>
  );
}
