import React, { Fragment } from "react";
import { useSelector } from "react-redux";

const ReturnDataTable = (props) => {
  const { singleRowData } = props;
  const allFines = useSelector((state) => state.fines.allFines);

  const FineRecord = allFines.findIndex(
    (fine) => fine.return_bill_id === singleRowData.return_bill_id
  );

  return (
    <Fragment>
      <td className="p-3 whitespace-nowrap font-bold text-blue-400">
        {`#${singleRowData["return_bill_id"]}`}
      </td>
      <td className="p-3 whitespace-nowrap font-bold text-blue-400">
        {`#${singleRowData["loan_bill_id"]}`}
      </td>
      <td className="p-3 whitespace-nowrap font-bold text-blue-400">
        {`#${singleRowData["customer_id"]}`}
      </td>
      <td className="p-3 whitespace-nowrap font-bold text-blue-400">
        {`#${singleRowData["staff_id"]}`}
      </td>
      <td className="p-3 whitespace-nowrap">{singleRowData["return date"]}</td>
      <td className="p-3 whitespace-nowrap text-center">
        <span
          className={`${
            FineRecord !== -1
              ? "text-red-800 bg-red-200"
              : "text-green-800 bg-green-200"
          } block p-1.5 font-bold text-center rounded-lg bg-opacity-50 font-sans text-[0.75rem] tracking-wider`}
        >
          {FineRecord !== -1
            ? `${allFines[FineRecord].num_of_day_late}`
            : "On Time"}
        </span>
      </td>
    </Fragment>
  );
};

export default ReturnDataTable;
