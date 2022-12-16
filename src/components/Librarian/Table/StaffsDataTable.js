import React, { Fragment } from "react";

const StaffsDataTable = (props) => {
  const { singleRowData } = props;

  return (
    <Fragment>
      <td className="p-3 whitespace-nowrap font-bold text-blue-400">
        {`#${singleRowData[0]}`}
      </td>
      <td className="p-3 whitespace-nowrap">{singleRowData[1]}</td>
      <td className="p-3 whitespace-nowrap">{singleRowData[2]}</td>
      <td className="p-3 whitespace-nowrap">{singleRowData[3]}</td>
      <td className="p-3 whitespace-nowrap">{singleRowData[4]}</td>
      <td className="p-3 whitespace-nowrap font-bold">${singleRowData[5]}00</td>
    </Fragment>
  );
};

export default StaffsDataTable;
