import {GET_PROJECTS } from "../actions/types";

const initialState = {
  
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PROJECTS:
      return action.payload;    
    default:
      return state;
  }
}
