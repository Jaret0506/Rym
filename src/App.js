import "./App.css";
import Cards from "./components/Cards.jsx";
import React, { useEffect, useState } from "react";
import NavBar from "./components/nav";
import axios from "axios";
import { Route, useNavigate } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Detail from "./components/detail";
import Presentacion from "./components/about";
import MyForm from "./components/form";
import { useLocation } from "react-router-dom";
import Favorites from "./components/Favorites";

function App() {
  const url = "https://rickandmortyapi.com/character";
  const [characters, setCharacters] = React.useState([]);
  const navigate = useNavigate();

  const [access, setAccess] = React.useState(false);

  var EMAIL = "jaretp2003@gmail.com";

  var PASSWORD = "mamaypapa";

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("Usuario o contraseña incorrecta");
    }
  }
  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const location = useLocation();

  const onClose = (id) => {
    const strId = parseInt(id);
    const filtro = characters.filter((personaje) => personaje.id !== strId);
    setCharacters(filtro);
  };

  const onSearch = (id) => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      });
  };

  return (
    <div className="App app-container">
      {location.pathname !== "/" ? <NavBar onSearch={onSearch} /> : <></>}
      <Routes>
        <Route path="/" element={<MyForm login={login} />} />
        <Route exact path="/about" element={<Presentacion />} />
        <Route exact path="/detail/:id" element={<Detail />} />
        <Route exact path="/favorites" element={<Favorites />} />

        <Route
          exact
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
      </Routes>
    </div>
  );
}

export default App;
