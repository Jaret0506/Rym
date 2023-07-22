import React from "react";
import { connect } from "react-redux";
import Card from "./Card";

function Favorites({ myFavorites }) {
  return (
    <div>
      {myFavorites?.map(
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
    myFavorites: state.myFavorite,
  };
}
export default connect(mapStateToProps)(Favorites);
