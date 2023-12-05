import { createStore } from "redux";
import redeucer from "./reducer";

const store = createStore(redeucer);

export default store;
