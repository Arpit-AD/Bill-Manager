import { ADD_BILL,REMOVE_BILL,EDIT_BILL } from "../constants/constants"

export const addBill = (data) =>{
    // console.warn("action",data);
    return {
        type : ADD_BILL,
        data
    }
}

export const editBill = (data) =>{ 
    console.warn("action",data)
    return {
        type: EDIT_BILL,
        data
    }
}

export const removeBill = (data) =>{ 
    return {
        type: REMOVE_BILL,
        data
    }
}
