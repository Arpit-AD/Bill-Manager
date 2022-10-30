import React, { useEffect, useState } from "react";
import BillCardContainer from "../Containers/BillCardContainer";
// import BillCard from "./BillCard";

const BillList = ({ bills }) => {
  const [filteredBill, setFiltered] = useState(bills);
  const [category, setCategory] = useState();
  const [budget, setBudget] = useState();
  const [noOfBills, setNoOfBills] = useState(0);

  // console.log(budget);

  useEffect(() => {
    let filteredBillTemp = [];
    if (category) {
      filteredBillTemp = bills.filter((bill) => bill.category === category);
      // console.log(filteredBillTemp);
    } else {
      filteredBillTemp = bills;
    }
    // console.log(filteredBillTemp);
    let billTemp = [];
    if (budget) {
      let sortedBills = bills;
      sortedBills = sortedBills.sort((a, b) => b.amount - a.amount);
      // console.log(sortedBills);
      let count = 0,
        amt = budget;

      for (let i = 0; i < sortedBills.length; i++) {
        if (amt >= sortedBills[i].amount) {
          billTemp.push(sortedBills[i]);
          count++;
          amt -= sortedBills[i].amount;
        }
      }
      setNoOfBills(count);
    } else {
      setNoOfBills(0);
      billTemp = filteredBillTemp;
    }
    // console.log(billTemp);

    setFiltered(billTemp);
  }, [category, budget]);

  // console.log(category);

  return (
    <>
      <div className="md:flex md:justify-between md:w-full w-fit m-auto">
      <div className="m-4">
        <label
          className="text-black font-bold rounded p-1 pb-2 pl-0"
          for="category"
        >
          Category - 
        </label>
        <select
          name="category"
          className="mx-1 p-1 outline-0"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select</option>
          <option value="Food & Dining">Food & Dining</option>
          <option value="Travel">Travel</option>
          <option value="Utility">Utility</option>
          <option value="Education">Education</option>
          <option value="Personal Care">Personal</option>
          <option value="Shopping">Shopping</option>
        </select>
      </div>

      <div className="text-black font-semibold m-4 rounded p-1 pb-2 pl-0" >
        <div className="md:hidden font-bold">Enter Monthly Budget</div>
        <span className="md:inline hidden font-bold">Enter Monthly Budget - </span>
        <input 
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="text-white p-1"
          />
        {/* </div> */}
      </div>
      </div>
      {budget && (
        <div className="text-black">No for Bills to be paid in given budget: {noOfBills}</div>
      )}
      <div className="flex flex-wrap">
        {filteredBill.map((bill, i) => (
          <BillCardContainer bill={bill} i={i} />
        ))}
      </div>
    </>
  );
};

export default BillList;
