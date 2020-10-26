import {
  TOGGLE_DROP_DOWN,
  CLOSE_DROP_DOWN
} from '../actions/types';


const initialState = {
  showDropDown:false
}

export default function(state = initialState, action){
    const { type, payload } = action;

    switch(type){
      case TOGGLE_DROP_DOWN:
      return {
        ...state,
        showDropDown:!payload
      }

      case CLOSE_DROP_DOWN:
      return{
        ...state,
        showDropDown:false
      }
      default:
      return state
    }
}
