import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";

export default function Detail() {
  const { id } = useParams();

  const [character, setCharacter] = React.useState({});
  useEffect(() => {
    axios("http://localhost:3001/rickandmorty/character/${id}").then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);
  return (
    <>
      <h1>Este es la pagina del personaje con id {id}</h1>
      <div className="detail">
        <Card
          id={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          origin={character.origin?.name}
          image={character.image}
        />
      </div>
    </>
  );
}
