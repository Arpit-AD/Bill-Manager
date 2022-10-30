import { connect } from "react-redux";
import AddNewBill from "../Pages/AddNewBill";
import {addBill} from "../Service/actions/actions"

const mapStateToProps = state => ({
    billData: state.billReducer
})


const mapDispatchToProps = dispatch => ({
    addBillHandler : data => dispatch(addBill(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(AddNewBill)