import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { HiDocumentRemove } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const BillCard = (props) => {
  function titleCase(str) {
    str = str.toLowerCase().split(" ");
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(" ");
  }
  const navigate = useNavigate();
  const { bill } = props;

  const formattedDate = (tempDate) => {
    let splitdate = tempDate.split('-');
    let date, month, year;
    if(splitdate[0].length == 4)
    {
      year = splitdate[0];
      month = splitdate[1];
      date = splitdate[2];
    }
    else{
      year = splitdate[2];
      month = splitdate[1];
      date = splitdate[0];
    }
    let printDate = date + '-' + month + '-' + year;
    return printDate;
  };

  // console.log(props);
  return (
    <div className="lg:basis-1/3 sm:basis-1/2 basis-full sm:p-4 py-4">
      <div className="text-white text-black glass rounded-lg">
        <div className="p-3 bg-[#252525] font-extrabold text-white rounded-t">
          <div className="flex justify-between">
           
<div>
            {" "}
            <span className="font-bold">Payment Id -</span> {bill.id}
          </div>
            <div className="flex">
              <div>
                {" "}
                <FaEdit
                  className="text-xl mr-2 cursor-pointer"
                  onClick={() => navigate("/edit/" + bill.id)}
                />{" "}
              </div>
              <div>
                {" "}
                <HiDocumentRemove
                  className="text-xl cursor-pointer"
                  onClick={() => {
                    props.removeBillHandler(bill.id);
                    navigate("/");
                  }}
                />{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="p-5">
  
          <div>
            {" "}
            <span className="font-bold">Description -</span>{" "}
            {titleCase(bill.description)}
          </div>
          <div>
            {" "}
            <span className="font-bold">Category -</span>{" "}
            {titleCase(bill.category)}
          </div>
          <div>
            {" "}
            <span className="font-bold">Amount -</span> {bill.amount} Rs.
          </div>
          <div>
            <span className="font-bold">Date - </span> {formattedDate(bill.date)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillCard;
