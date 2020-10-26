import {
  TOGGLE_DROP_DOWN,
  CLOSE_DROP_DOWN
} from './types';

export const toggleDropDown = (dropDownState) => dispatch =>{

  dispatch({
    type:TOGGLE_DROP_DOWN,
    payload:dropDownState
  })
}

export const closeDropDown = (dropDownState) => dispatch =>{

  if(dropDownState){
    dispatch({
      type:CLOSE_DROP_DOWN
    })
  }
}
