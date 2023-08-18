// import { ADD_FAV } from "./action-type";
// import { REMOVE_FAV } from "./action-type";
// import { GET_ALL } from "./action-type";
import axios from "axios";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const GET_ALL = "GET_ALL";

// export const addFav = (payload) => {
//   return {
//     type: ADD_FAV,
//     payload: payload,
//   };
// };
export const addFav = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return (dispatch) => {
    axios.post(endpoint, character).then(({ data }) => {
      return dispatch({
        type: "ADD_FAV",
        payload: data,
      });
    });
  };
};

export const removeFav = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  return (dispatch) => {
    axios.delete(endpoint).then(({ data }) => {
      return dispatch({
        type: "REMOVE_FAV",
        payload: data,
      });
    });
  };
};
// export const removeFav = (id) => {
//   return {
//     type: REMOVE_FAV,
//     payload: id,
//   };
// };
export const getAllfavorites = () => {
  return {
    type: GET_ALL,
  };
};
