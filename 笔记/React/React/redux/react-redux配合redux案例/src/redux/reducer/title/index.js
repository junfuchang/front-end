import { TITLE1, TITLE2 } from "../../countent";

const initState = "默认标题";

export default function count(preState = initState, action) {
  const { type } = action;
  switch (type) {
    case TITLE1:
      return "标题1";
    case TITLE2:
      return "标题2";
    default:
      return preState;
  }
}
