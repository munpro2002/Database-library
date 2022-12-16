import React from "react";
import StaffsDataTable from "./StaffsDataTable";
import CustomersDataTable from "./CustomersDataTable";
import BooksDataTable from "./BooksDataTable";
import HomeLoanDataTable from "./HomeLoanDataTable";
import LibraryLoanDataTable from "./LibraryLoanDataTable";
import FinePaymentsTable from "./FinePaymentsTable";
import BorrowPaymentsTable from "./BorrowPaymentsTable";
import ReturnDataTable from "./ReturnDataTable";

const Table = (props) => {
  const { title, dir, data } = props;

  return (
    <div className="bg-white max-h-[30rem] mx-auto p-4 rounded-lg overflow-auto shadow">
      <table className="table-auto w-full">
        <thead className="text-left bg-gray-50 border-b-2 border-gray-100">
          <tr className="text-[#0A284A]">
            {dir.map((dir, index) => {
              return (
                <th key={index} className="p-3 whitespace-nowrap">
                  {dir}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {data.map((singleRowData, index) => (
            <tr key={index} className={`${index % 2 !== 0 && "bg-gray-50"}`}>
              {title === "Books" && (
                <BooksDataTable singleRowData={singleRowData} />
              )}
              {title === "Customers" && (
                <CustomersDataTable singleRowData={singleRowData} />
              )}
              {title === "Staffs" && (
                <StaffsDataTable singleRowData={singleRowData} />
              )}
              {title === "Home Loan" && (
                <HomeLoanDataTable singleRowData={singleRowData} />
              )}
              {title === "Library Loan" && (
                <LibraryLoanDataTable singleRowData={singleRowData} />
              )}
              {title === "Return Records" && (
                <ReturnDataTable singleRowData={singleRowData} />
              )}
              {title === "Fine" && (
                <FinePaymentsTable singleRowData={singleRowData} />
              )}
              {title === "Borrow" && (
                <BorrowPaymentsTable singleRowData={singleRowData} />
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
