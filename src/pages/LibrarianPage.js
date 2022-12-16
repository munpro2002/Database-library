import React, { Fragment, useState } from "react";
import ColNav from "../components/Librarian/ColNav";
import Header from "../components/Librarian/Header";
import { useSelector } from "react-redux";
import Table from "../components/Librarian/Table/Table";
import CreateBillForm from "../components/Librarian/CreateBillForm";
import CreateReturnBill from "../components/Librarian/CreateReturnBill";

const booksDir = [
  "ISBN",
  "Title",
  "Category",
  "Public company",
  "Public date",
  "Price",
  "Number of Copies",
  "Staff ID",
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

const LibrarianPage = () => {
  const [title, setTitle] = useState("Books");

  const changeActiveCategoryHandler = (title) => {
    setTitle(title);
  };

  const books = useSelector((state) => state.books.allBooks);
  const customers = useSelector((state) => state.customers.allCustomers);
  const staffs = useSelector((state) => state.staffs.allStaffs);

  // console.log(loanHomeBill, loanLibraryBill);

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
          ${title === "Return Bills" ? "max-w-[700px]" : "w-full"} mx-auto`}
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
        </div>
      </div>
    </Fragment>
  );
};

export default LibrarianPage;
