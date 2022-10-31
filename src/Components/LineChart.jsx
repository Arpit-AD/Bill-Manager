import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";
import { useNavigate } from "react-router-dom";
ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);

function LineChart(props) {
  const monthSpend = [0,0,0,0,0,0,0,0,0,0,0,0];
  console.log("charts",props)
  console.log(monthSpend)
  for(let i = 0; i < props.billData.length; i++){
    var objDate = props.billData[i].date;
    var mon = objDate.split('-')[1];
    monthSpend[mon-1] = Number(monthSpend[mon-1]) + Number(props.billData[i].amount);
  }
  const [data, setData] = useState({
    labels: [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "First Dataset",
        data: monthSpend,
        borderColor: "staleblue",
        tension: 0.1,
        fill: true,
        pointStyle: "rect",
        pointBorderColor: "blue",
        pointBackgroundColor: "#fff",
        showLine: true,
      },
    ],
  });
  const navigate = useNavigate();
  return (
    <>
      <div className="md:text-3xl text-lg md:p-8 p-6 md:px-16 flex text-white font-black justify-between bg-[#252525]">
        <span onClick={() => navigate("/")}> BILL MANAGER </span>
        <div className="cursor-pointer" onClick={() => navigate("/new")}>
          <div className="text-white w-12 text-center  border-2 border-grey-100">
            +
          </div>
        </div>
      </div>
      <div className = "m-auto mt-10" style={{ width: "800px", height: "800px" }}> 
        <Line data={data}>Hello</Line>
      </div>
    </>
  );
}

export default LineChart;
