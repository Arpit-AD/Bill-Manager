import { connect } from "react-redux"
import { removeBill } from "../Service/actions/actions";
import BillCard from "../Components/BillCard";

const mapStateToProps = state => ({
    billData: state.billReducer
})


const mapDispatchToProps = dispatch => ({
    removeBillHandler: data => dispatch(removeBill(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(BillCard)