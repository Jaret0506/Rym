import React from "react";
import { Link } from "react-router-dom";
// import { addFav } from "../redux/actions";
import { removeFav } from "../redux/actions";
import { Dispatch } from "react";
import { connect, useDispatch } from "react-redux";
import { useEffect } from "react";
import * as actions from "../redux/actions";

// export default connect(null, mapDispatchToProps)(Card);
function Card(props) {
  const dispatch = useDispatch();

  const [isFav, setIsFav] = React.useState(false);
  useEffect(() => {
    props.myFavorite.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [props.myFavorites]);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(props.id);
    } else {
      setIsFav(true);
      console.log(isFav);
      dispatch(
        actions.addFav({
          name: props.name,
          status: props.status,
          species: props.species,
          gender: props.gender,
          origin: props.origin,
          image: props.image,
          id: props.id,
        })
      );
    }
  };
  return (
    <div className="ola">
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <button onClick={() => props.onClose(props.id)}>X</button>

      <h4>Id:{props.id}</h4>
      <Link to={`/detail/${props.id}`}>
        <h4 className="card-name">{props.name}</h4>
      </Link>
      <h4>{props.status}</h4>
      <h4>{props.species}</h4>
      <h4>{props.gender}</h4>
      <h4>{props.origin}</h4>
      <center>
        <div>
          <img
            src={props.image}
            className="imagenes"
            alt="Aqui iria la imagen"
          />
        </div>
      </center>
    </div>
  );
}
export function mapStateToProps(state) {
  return {
    myFavorite: state.myFavorites,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    addFav: function (character) {
      dispatch(actions.addFav(character));
    },
    removeFromFavorites: function (id) {
      dispatch(removeFav(id));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Card);
