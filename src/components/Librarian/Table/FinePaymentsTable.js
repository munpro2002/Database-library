import React, { Fragment } from "react";

const FinePaymentsTable = (props) => {
  const { singleRowData } = props;

  return (
    <Fragment>
      <td className="p-3 whitespace-nowrap font-bold text-blue-400">
        {`#${singleRowData.fine_id}`}
      </td>
      <td className="p-3 whitespace-nowrap font-bold text-blue-400">
        {`#${singleRowData.payment_id}`}
      </td>
      <td className="p-3 whitespace-nowrap font-bold text-blue-400">
        {`#${singleRowData["customer_id"]}`}
      </td>
      <td className="p-3 whitespace-nowrap font-bold">
        {`$${singleRowData["amount_money"]}`}
      </td>
      <td className="p-3 whitespace-nowrap">{singleRowData["payment_time"]}</td>
    </Fragment>
  );
};

export default FinePaymentsTable;
