import { ADD, SUB } from "../../countent";

export const countADD = (data) => ({ type: ADD, data: data });

export const countAsyncAdd =
  (data, time = 500) =>
  (dispatch) => {
    console.log("调用了异步");
    setTimeout(() => {
      dispatch(countADD(data));
    }, time);
  };

export const countSub = (data) => ({ type: SUB, data: data });
