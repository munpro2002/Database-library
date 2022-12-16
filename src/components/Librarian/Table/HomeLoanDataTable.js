import React, { Fragment } from "react";

const HomeLoanDataTable = (props) => {
  const { singleRowData } = props;

  return (
    <Fragment>
      <td className="p-3 whitespace-nowrap font-bold text-blue-400">
        {`#${singleRowData["loan_bill_id"]}`}
      </td>
      <td className="p-3 whitespace-nowrap font-bold text-blue-400">
        {`#${singleRowData["book_id"]}`}
      </td>
      <td className="p-3 whitespace-nowrap font-bold text-blue-400">
        {`#${singleRowData["customer_id"]}`}
      </td>
      <td className="p-3 whitespace-nowrap font-bold text-blue-400">
        {`#${singleRowData["staff_id"]}`}
      </td>
      <td className="p-3 whitespace-nowrap">{singleRowData["borrow_time"]}</td>
      <td className="p-3 whitespace-nowrap">{singleRowData["due_time"]}</td>
    </Fragment>
  );
};

export default HomeLoanDataTable;
