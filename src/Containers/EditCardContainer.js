import { connect } from "react-redux";
import EditBill from "../Pages/EditBill";
import {editBill} from "../Service/actions/actions"

const mapStateToProps = state => ({
    billData: state.billReducer
})


const mapDispatchToProps = dispatch => ({
    editBillHandler : data => dispatch(editBill(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(EditBill)