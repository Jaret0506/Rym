import React from "react";
import { connect, useSelector } from "react-redux";
import Card from "./Card";

function Favorites() {
  const myFavorite = useSelector((state) => state.myFavorites);

  return (
    <div>
      {myFavorite?.map(
        ({ id, name, gender, species, image, status, origin }) => (
          <Card
            key={id}
            name={name}
            gender={gender}
            species={species}
            image={image}
            status={status}
            origin={origin}
          />
        )
      )}
    </div>
  );
}
export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}
export default connect(mapStateToProps)(Favorites);
