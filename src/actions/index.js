export const ADD_ONE = 'ADD_ONE';
export const SUBTRACT_ONE = 'SUBTRACT_ONE';

const addOne = () => {
  return {
    type: ADD_ONE
  }
}

const substractOne = () => {
  return {
    type: SUBTRACT_ONE
  }
}

export const actionCreators = {
  addOne,
  substractOne
}
