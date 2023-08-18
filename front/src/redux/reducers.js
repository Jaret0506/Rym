// import { ADD_FAV } from "./action-type";
// import { REMOVE_FAV } from "./action-type";
// import { GET_ALL } from "./action-type";

import { ADD_FAV, GET_ALL, REMOVE_FAV } from "./actions";

const initialState = {
  myFavorites: [],
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      console.log("payload", action);
      // return {
      //   ...state,
      //   myFavorites: [...state.myFavorites, action.payload],
      // };
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };
    case REMOVE_FAV:
      // return {
      //   ...state,
      //   myFavorites: state.myFavorites.filter(
      //     (personaje) => personaje.id !== action.payload
      //   ),
      // };
      return { ...state, myFavorites: action.payload };
    case GET_ALL:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default rootReducer;
