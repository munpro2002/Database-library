import React, { Fragment, useState } from "react";
import Modal from "../UI/Modal";
import { useSelector } from "react-redux";
import Table from "./Table/Table";

const returnDir = [
  "ReturnID",
  "LoanID",
  "CustomerID",
  "StaffID",
  "Return date",
  "Days late",
];

const CreateReturnBill = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [loanBillOptionValue, setLoanBillOptionValue] = useState(null);
  const [customerOptionValue, setCustomersOptionValue] = useState(null);
  const [staffOptionValue, setStaffOptionValue] = useState(null);

  const customers = useSelector((state) => state.customers.allCustomers);
  const staffs = useSelector((state) => state.staffs.allStaffs);
  const homeLoanBills = useSelector((state) => state.loanbills.allLoanHome);
  const libraryLoanBills = useSelector(
    (state) => state.loanbills.allLoanLibrary
  );
  const allLoanBills = [...homeLoanBills, ...libraryLoanBills];
  //   console.log(allLoanBills);

  const returnBills = useSelector((state) => state.loanbills.allReturnBills);
  //   console.log(returnBills);

  const openModalHandler = () => {
    setIsOpenModal(true);
  };

  const closeModalHandler = () => {
    setIsOpenModal(false);

    setCustomersOptionValue(null);
    setStaffOptionValue(null);
    setLoanBillOptionValue(null);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (!loanBillOptionValue || !staffOptionValue || !customerOptionValue) {
      alert("please choose a valid option!!");
      return;
    }
    const loanInfo = {
      loanBillID: Number(loanBillOptionValue),
      staffID: Number(staffOptionValue),
      customerID: Number(customerOptionValue),
    };

    console.log(loanInfo);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loanInfo),
    };

    fetch("http://127.0.0.1:5000/api/v1/bills/return", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));

    closeModalHandler();
  };

  return (
    <Fragment>
      <div>
        <h1 className="text-center font-semibold text-[2rem]">
          Return Management
        </h1>
        <p className="text-[0.8rem] text-slate-500 text-center">
          Is there someone want to return a book?{" "}
          <span
            className="text-black font-bold hover:underline cursor-pointer"
            onClick={openModalHandler}
          >
            Create return bill
          </span>
        </p>
      </div>
      {<Table dir={returnDir} data={returnBills} title="Return Records" />}
      {isOpenModal && (
        <Modal onCloseModal={closeModalHandler}>
          <form onSubmit={submitFormHandler}>
            <h1 className="font-semibold text-[1.5rem] text-center">
              CREATE RETURN
            </h1>
            <h2 className="font-bold text-gray-700 border-b-2 border-b-slate-400 py-2">
              BOOKS
            </h2>
            <select
              defaultValue="Select a book"
              onChange={(e) => {
                setLoanBillOptionValue(e.currentTarget.value);
              }}
              className="p-2 w-full shadow rounded-md mt-2 focus:outline-blue-400"
            >
              <option disabled className="bg-slate-400 text-white">
                Select a book
              </option>
              {allLoanBills.map((bill, index) => (
                <option
                  value={bill["book_id"]}
                  key={index}
                >{`${bill["book_id"]}--${bill["staff_id"]}--${bill["customer_id"]}--${bill["borrow_time"]}--${bill["due_time"]}`}</option>
              ))}
            </select>
            <h2 className="font-bold text-gray-700 border-b-2 border-b-slate-400 py-2">
              CUSTOMERS
            </h2>
            <select
              defaultValue="Select a customer"
              onChange={(e) => {
                setCustomersOptionValue(e.currentTarget.value);
              }}
              className="p-2 w-full shadow rounded-md mt-2 focus:outline-blue-400"
            >
              <option disabled className="bg-slate-400 text-white">
                Select a customer
              </option>
              {customers.map((customer, index) => (
                <option
                  value={customer[0]}
                  key={index}
                >{`${customer[0]}--${customer[1]} ${customer[2]}--${customer[3]}--${customer[8]}`}</option>
              ))}
            </select>
            <h2 className="font-bold text-gray-700 border-b-2 border-b-slate-400 py-2">
              LIBRARIANS
            </h2>
            <select
              defaultValue="Select a librarian"
              onChange={(e) => {
                setStaffOptionValue(e.currentTarget.value);
              }}
              className="p-2 w-full shadow rounded-md mt-2 focus:outline-blue-400"
            >
              <option disabled className="bg-slate-400 text-white">
                Select a librarian
              </option>
              {staffs.map((staff, index) => (
                <option
                  value={staff[0]}
                  key={index}
                >{`${staff[0]}--${staff[1]} ${staff[2]}`}</option>
              ))}
            </select>
            <div className="flex justify-end mt-4">
              <button
                type="submit"
                className="p-2 bg-[#263544] text-white font-medium rounded-md shadow"
              >
                Confirm
              </button>
            </div>
          </form>
        </Modal>
      )}
    </Fragment>
  );
};

export default CreateReturnBill;
