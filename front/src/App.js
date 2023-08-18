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

  var email = "jaretp2003@gmail.com";

  var password = "mamaypapa2";

  function login(userData) {
    const { email, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login/";
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
      const { access } = data;
      setAccess(data);
      access && navigate("/home");
    });
  }
  // function login(userData) {
  //   if (userData.password === PASSWORD && userData.email === EMAIL) {
  //     setAccess(true);
  //     navigate("/home");
  //   } else {
  //     alert("Usuario o contraseña incorrecta");
  //   }
  // }
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
      .get(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
        if (data.characters) {
          setCharacters((allCharacters) => [...allCharacters, data.characters]);
        }

        console.log(data);
      })
      .catch(() => {
        window.alert("¡No hay personajes con este ID!");
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
