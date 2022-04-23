import { ADD, SUB } from "../../countent";

const initState = 0;

export default function count(preState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case ADD:
      return preState + data;
    case SUB:
      return preState - data;
    default:
      return preState;
  }
}
