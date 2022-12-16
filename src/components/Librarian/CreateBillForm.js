import React, { useState, Fragment } from "react";
import Modal from "../UI/Modal";
import { useSelector } from "react-redux";
import Table from "./Table/Table";

const loanDir = [
  "LoanID",
  "ISBN",
  "CustomerID",
  "StaffID",
  "Borrow Time",
  "Due Time",
];

const CreateBillForm = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [bookOptionValue, setBookOptionValue] = useState(null);
  const [customerOptionValue, setCustomersOptionValue] = useState(null);
  const [staffOptionValue, setStaffOptionValue] = useState(null);
  const [loanOptionValue, setLoanOptionValue] = useState(null);

  const books = useSelector((state) => state.books.allBooks);
  const customers = useSelector((state) => state.customers.allCustomers);
  const staffs = useSelector((state) => state.staffs.allStaffs);
  const homeLoanBills = useSelector((state) => state.loanbills.allLoanHome);
  const libraryLoanBills = useSelector(
    (state) => state.loanbills.allLoanLibrary
  );

  const openModalHandler = () => {
    setIsOpenModal(true);
  };

  const closeModalHandler = () => {
    setIsOpenModal(false);

    setBookOptionValue(null);
    setCustomersOptionValue(null);
    setStaffOptionValue(null);
    setLoanOptionValue(null);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (
      !bookOptionValue ||
      !staffOptionValue ||
      !customerOptionValue ||
      !loanOptionValue
    ) {
      alert("please choose a valid option!!");
      return;
    }

    const loanInfo = {
      ISBN: bookOptionValue,
      staffID: staffOptionValue,
      customerID: customerOptionValue,
      type: loanOptionValue,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loanInfo),
    };

    fetch("http://127.0.0.1:5000/api/v1/bills/loan", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));

    closeModalHandler();
  };

  return (
    <Fragment>
      <div>
        <h1 className="text-center font-semibold text-[2rem]">
          Loan Management
        </h1>
        <p className="text-[0.8rem] text-slate-500 text-center">
          Is there someone want to borrow a book?{" "}
          <span
            className="text-black font-bold hover:underline cursor-pointer"
            onClick={openModalHandler}
          >
            Create loan bill
          </span>
        </p>
      </div>
      {
        <Fragment>
          <h2 className="font-bold mt-4 mb-2 text-[1.25rem] border-b-[2px] text-dark-purple border-dark-purple">
            Home Loan
          </h2>
          <Table dir={loanDir} data={homeLoanBills} title="Home Loan" />
        </Fragment>
      }
      {
        <Fragment>
          <h2 className="font-bold mt-4 mb-2 text-[1.25rem] border-b-[2px] border-dark-purple">
            Library Loan
          </h2>
          <Table dir={loanDir} data={libraryLoanBills} title="Library Loan" />
        </Fragment>
      }
      {isOpenModal && (
        <Modal onCloseModal={closeModalHandler}>
          <form onSubmit={submitFormHandler}>
            <h1 className="font-semibold text-[1.5rem] text-center">
              CREATE LOAN
            </h1>
            <h2 className="font-bold text-gray-700 border-b-2 border-b-slate-400 py-2">
              BOOKS
            </h2>
            <select
              defaultValue="Select a book"
              onChange={(e) => {
                setBookOptionValue(e.currentTarget.value);
              }}
              className="p-2 w-full shadow rounded-md mt-2 focus:outline-blue-400"
            >
              <option disabled className="bg-slate-400 text-white">
                Select a book
              </option>
              {books.map((book, index) => (
                <option
                  value={book[0]}
                  key={index}
                >{`${book[0]}--${book[1]}--${book[2]}--${book[3]}--${book[4]}`}</option>
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
            <h2 className="font-bold text-gray-700 border-b-2 border-b-slate-400 py-2">
              LOAN TYPE
            </h2>
            <select
              defaultValue="Select a loan type"
              onChange={(e) => {
                setLoanOptionValue(e.currentTarget.value);
              }}
              className="p-2 w-full shadow rounded-md mt-2 focus:outline-blue-400"
            >
              <option disabled className="bg-slate-400 text-white">
                Select a loan type
              </option>
              <option value={"borrowHome"}>Borrow home</option>
              <option value={"readIn"}>Read in library</option>
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

export default CreateBillForm;
