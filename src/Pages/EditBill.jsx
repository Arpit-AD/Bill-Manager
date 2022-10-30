import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditBill(props) {
  // console.log(props);
  const { id } = useParams();
  const bill = props.billData.filter((bill) => bill.id == id)[0];

  const [data, setData] = useState(bill);
  const navigate = useNavigate();
  const onChangeHandler = (e) =>
    setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));

  // console.log('bills', props.billData);
  return (
    <>
      <div className="md:text-3xl text-lg md:p-8 p-6 md:px-16 text-white font-black justify-between bg-[#252525] cursor-pointer" onClick={() => navigate("/")}>
        BILL MANAGER   
      </div>
      <div className="md:w-1/3 m-auto flex md:p-12 sm:pt-10 pt-6">
        <form className="text-black m-auto justify-center glass p-10 ">
          <div>
            <div className="font-bold">Description</div>
            <div>
              <textarea
                className="p-2 bg-white w-full"
                name="description"
                value={data.description}
                onChange={(e) => onChangeHandler(e)}
              />
            </div>
          </div>
          <div>
            <div className="font-bold pt-2">Category</div>
            <div>
            <select
                name="category"
                id="category"
                className = "p-2 bg-white w-full"
                value={data.category}
                onChange={(e) => onChangeHandler(e)}
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
          </div>
          <div>
            <div className="font-bold pt-2">Amount</div>
            <div>
              <input
                className="p-2 bg-white"
                name="amount"
                type = "number"
                value={data.amount}
                onChange={(e) => onChangeHandler(e)}
              />
            </div>
          </div>
          <div>
            <div className="font-bold pt-2">Date</div>
            <div>
              <input
                type="date"
                min="2015-01-01" max="2030-12-31"
                className="p-2 bg-white w-full"
                name="date"
                value={data.date}
                onChange={(e) => onChangeHandler(e)}
              />
            </div>
          </div>
          <input
            type="submit btn"
            value="Edit Bill"
            onClick={() => {
              props.editBillHandler(data);
              // setData(initialState);
              navigate("/");
            }}
            className="block w-full text-white text-center bg-[#252525] border-[#252525] border-2 mt-3 cursor-pointer hover:bg-zinc-700"
          />
          <input
            onClick={() => navigate("/")}
            value="Back"
            className="block w-full text-black text-center bg-white border-zinc-700 border-2 mt-3 cursor-pointer"
          />
        </form>
      </div>
    </>
  );
}
