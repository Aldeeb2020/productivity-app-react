export const ACTIONS = {
  ADD: "add",
  SUBTRACT: "subtract",
  DIVIDE: "divide",
  MULTIPLICATION: "multiplication"
}

export default function reducer(state, action){
  const {num1, num2} = action.paylodad;
  switch(action.type){
    case ACTIONS.ADD:
      return num1 + num1; 
    case ACTIONS.SUBTRACT:
      return num1 - num2;
    case ACTIONS.DIVIDE:
      return num1 / num2;
    case ACTIONS.MULTIPLICATION:
      return num1 * num2;
    default:
      return state;
  }
}
