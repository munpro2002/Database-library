import React, { Fragment, useState } from "react";
import ColNav from "../components/Librarian/ColNav";
import Header from "../components/Librarian/Header";
import { useSelector } from "react-redux";
import Table from "../components/Librarian/Table/Table";
import CreateBillForm from "../components/Librarian/CreateBillForm";
import CreateReturnBill from "../components/Librarian/CreateReturnBill";
import CreateNotifications from "../components/Librarian/CreateNotifications";

const booksDir = [
  "ISBN",
  "Title",
  "Category",
  "Public company",
  "Public date",
  "Price",
  "Number of Copies",
  "Staff ID",
  "Remaining copies",
];
const staffsDir = [
  "Staff ID",
  "First name",
  "Last name",
  "Sex",
  "Date of birth",
  "Salary",
];
const customersDir = [
  "Customer ID",
  "First name",
  "LastName",
  "Address",
  "Phone number",
  "Sex",
  "Email",
  "Date of birth",
  "Member type",
];
const fineDir = [
  "Fine ID",
  "Payment ID",
  "Customer ID",
  "Amount money",
  "Payment Time",
];
const borrowDir = [
  "Loan ID",
  "Payment ID",
  "Customer ID",
  "Amount money",
  "Payment Time",
];

const LibrarianPage = () => {
  const [title, setTitle] = useState("Books");

  const changeActiveCategoryHandler = (title) => {
    setTitle(title);
  };

  const books = useSelector((state) => state.books.allBooks);
  const customers = useSelector((state) => state.customers.allCustomers);
  const staffs = useSelector((state) => state.staffs.allStaffs);
  const finePayments = useSelector((state) => state.payments.allFinePayments);
  const borrowPayments = useSelector(
    (state) => state.payments.allBorrowPayments
  );

  console.log(finePayments, borrowPayments);

  return (
    <Fragment>
      <ColNav
        activeTitle={title}
        onChangeActiveCategory={changeActiveCategoryHandler}
      />
      <div className="lg:ml-64 ml-20">
        <Header title={title} />
        <div
          className={`mt-6 px-5 ${
            title === "Staffs" ? "max-w-[760px]" : "w-full"
          } ${title === "Loan Bills" ? "max-w-[1000px]" : "w-full"} 
          ${title === "Return Bills" ? "max-w-[700px]" : "w-full"} ${
            title === "Payments" ? "max-w-[760px]" : "w-full"
          } mx-auto`}
        >
          {title === "Books" && (
            <Fragment>
              <h1 className="text-center font-semibold text-[2rem]">
                {title} List
              </h1>
              <Table title={title} dir={booksDir} data={books} />
            </Fragment>
          )}
          {title === "Customers" && (
            <Fragment>
              <h1 className="text-center font-semibold text-[2rem]">
                {title} List
              </h1>
              <Table title={title} dir={customersDir} data={customers} />
            </Fragment>
          )}
          {title === "Staffs" && (
            <Fragment>
              <h1 className="text-center font-semibold text-[2rem]">
                {title} List
              </h1>
              <Table title={title} dir={staffsDir} data={staffs} />
            </Fragment>
          )}
          {title === "Loan Bills" && <CreateBillForm />}
          {title === "Return Bills" && <CreateReturnBill />}
          {title === "Payments" && (
            <Fragment>
              <h1 className="text-center font-semibold text-[2rem]">
                {title} Info
              </h1>
              <div>
                <h2 className="font-bold my-2 text-[1.25rem] border-b-[2px] text-dark-purple border-dark-purple">
                  Fine payments
                </h2>
                <Table title={"Fine"} dir={fineDir} data={finePayments} />
              </div>
              <div>
                <h2 className="font-bold my-2 text-[1.25rem] border-b-[2px] text-dark-purple border-dark-purple">
                  Borrow payments
                </h2>
                <Table title={"Borrow"} dir={borrowDir} data={borrowPayments} />
              </div>
            </Fragment>
          )}
          {title === "Notifications" && <CreateNotifications />}
        </div>
      </div>
    </Fragment>
  );
};

export default LibrarianPage;
