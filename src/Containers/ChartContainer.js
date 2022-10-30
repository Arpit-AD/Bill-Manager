import { connect } from "react-redux";
import LineChart from "../Components/LineChart";

const mapStateToProps = state => ({
    billData: state.billReducer
})


const mapDispatchToProps = dispatch => ({
    
})


export default connect(mapStateToProps, mapDispatchToProps)(LineChart)