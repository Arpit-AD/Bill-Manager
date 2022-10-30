import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BillList from "../Components/BillList";

const Home = (props) => {
  // const [bills, setBills] = useState(data.bills);
  const { billData } = props;
  const navigate = useNavigate();
  // console.log('home',props);
  return (
    <div className="">
      <div className="md:text-3xl text-lg md:p-8 p-6 md:px-16 flex text-white font-black justify-between bg-[#252525]">
        BILL MANAGER
        <div className="flex">
          <div className="cursor-pointer" onClick={() => navigate("/new")}>
            <div className="text-white w-12 text-center  border-2 border-grey-100">
              +
            </div>
          </div>
          <div className="cursor-pointer" onClick={() => navigate("/chart")}>
            <div className="text-white w-12 text-center  border-2 border-grey-100">
              C
            </div>
          </div>
        </div>
      </div>
      <div className="sm:p-10 p-4">
        <BillList bills={billData} />
      </div>
    </div>
  );
};

export default Home;
