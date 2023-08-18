import React from "react";
import { useState } from "react";
import "./formstyle.css";
import logoform from "../components/logoofrom.png";
import { useEffect } from "react";

export default function MyForm({ login }) {
  const [userData, setUserData] = React.useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({
    email: "",
    password: "",
  });

  const validate = () => {
    if (!userData.email) setErrors({ ...errors, email: "Email vacio" });
    else {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userData.email))
        setErrors({ ...errors, email: "" });
      else
        setErrors({ ...errors, email: "Introduce un email valido por favor" });
    }
  };
  const pvalidate = () => {
    if (!userData.password)
      setErrors({ ...errors, password: "Digita una password" });
    else {
      if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(userData.password))
        setErrors({ ...errors, password: "" });
      else
        setErrors({
          ...errors,
          password:
            "Asegurate de que la contraseña tenga un numero y entre 8 y 16 caracteres",
        });
    }
  };

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setUserData({ ...userData, [property]: value });
  };

  useEffect(() => {
    validate();
  }, [userData.email]);

  useEffect(() => {
    pvalidate();
  }, [userData.password]);

  const sumbitHandler = (event) => {
    event.preventDefault();
    login(userData);
  };

  // useEffect(() => {
  //   const property = "email"; // Propiedad a validar (email o password)
  //   const value = userData[property]; // Valor de la propiedad a validar

  //   validate({ ...userData, [property]: value }, setErrors, errors);
  //   pvalidate({ ...userData, [property]: value }, setErrors, errors);
  // }, [userData]); // El efecto se ejecutará cada vez que userData cambie

  return (
    <form onSubmit={sumbitHandler}>
      <div className="containerform">
        <img src={logoform} className="logo"></img>
        <label htmlFor="email">Email:</label>
        <input
          className="cardform"
          type="text"
          name="email"
          value={userData.email}
          onChange={handleChange}
        ></input>
        <span className="aviso">{errors.email}</span>

        <label htmlFor="password">Password:</label>
        <input
          className="cardform"
          type="text"
          name="password"
          value={userData.password}
          onChange={handleChange}
        ></input>
        <span className="aviso">{errors.password}</span>
        <button type="sumbit" className="button">
          Login
        </button>
      </div>
    </form>
  );
}
