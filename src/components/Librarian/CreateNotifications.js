import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import Modal from "../UI/Modal";

const CreateNotifications = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [bookOptionValue, setBookOptionValue] = useState(null);
  const [customerOptionValue, setCustomersOptionValue] = useState(null);

  const customers = useSelector((state) => state.customers.allCustomers);
  const books = useSelector((state) => state.books.allBooks);
  const notifs = useSelector((state) => state.notifs.allNotifs);

  const openModalHandler = () => {
    setIsOpenModal(true);
  };

  const closeModalHandler = () => {
    setIsOpenModal(false);

    setBookOptionValue(null);
    setCustomersOptionValue(null);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (!bookOptionValue || !customerOptionValue) {
      alert("please choose a valid option!!");
      return;
    }

    const loanInfo = {
      ISBN: Number(bookOptionValue),
      customerID: Number(customerOptionValue),
    };

    console.log(loanInfo);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loanInfo),
    };

    fetch("http://127.0.0.1:5000/api/v1/notis", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));

    closeModalHandler();
  };

  return (
    <Fragment>
      <div>
        <h1 className="text-center font-semibold text-[2rem]">
          Book notifications
        </h1>
        <p className="text-[0.8rem] text-slate-500 text-center">
          Is there someone want to schedule for a book?{" "}
          <span
            className="text-black font-bold hover:underline cursor-pointer"
            onClick={openModalHandler}
          >
            Create notifications
          </span>
        </p>
      </div>
      <div className="grid grid-cols-2 max-w-[760px] mx-auto gap-4">
        <div>
          {notifs.map(
            (noti, index) =>
              noti.status === true && (
                <div
                  className="p-5 flex justify-between items-center shadow mt-4 border-l-[4px] border-green-500"
                  key={index}
                >
                  <span className="font-bold text-blue-400">
                    #{noti.noti_id}
                  </span>
                  <span className="font-bold text-blue-400">
                    #{noti.customer_id}
                  </span>
                  <span className="font-bold text-blue-400">#{noti.isbn}</span>
                  <span className="font-bold text-green-400">TRUE</span>
                </div>
              )
          )}
        </div>
        <div>
          {notifs.map(
            (noti, index) =>
              noti.status === false && (
                <div
                  className="p-5 flex justify-between items-center shadow mt-4 border-l-[4px] border-red-500"
                  key={index}
                >
                  <span className="font-bold text-blue-400">
                    #{noti.noti_id}
                  </span>
                  <span className="font-bold text-blue-400">
                    #{noti.customer_id}
                  </span>
                  <span className="font-bold text-blue-400">#{noti.isbn}</span>
                  <span className="font-bold text-red-400">FALSE</span>
                </div>
              )
          )}
        </div>
      </div>

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

export default CreateNotifications;
