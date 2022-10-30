import { ADD_BILL, EDIT_BILL, REMOVE_BILL } from "../constants/constants";

import data from "../../Data/data.json"
const initialState = data.bills;

const billReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BILL:
      // console.warn("reducer", action)
      return [...state, action.data ];
      break;
    case EDIT_BILL:
      let tempArray = state;
      let temp = tempArray.findIndex(bill => bill.id == action.data.id);
      tempArray[temp] = action.data;
      return tempArray;
      break;
    case REMOVE_BILL:
      let tempArray2 = state;
      let idx = tempArray2.findIndex(bill => bill.id == action.data)
      tempArray2.splice(idx,1);
      return tempArray2;
      break;
    default:
      return state;
  }
};

export default billReducer;
