import React, { Fragment } from "react";

const BooksDataTable = (props) => {
  const { singleRowData } = props;

  return (
    <Fragment>
      <td className="p-3 whitespace-nowrap font-bold text-blue-400">
        {`#${singleRowData[0]}`}
      </td>
      <td className="p-3 whitespace-nowrap">{singleRowData[1]}</td>
      <td className="p-3 whitespace-nowrap">{singleRowData[3]}</td>
      <td className="p-3 whitespace-nowrap">{singleRowData[4]}</td>
      <td className="p-3 whitespace-nowrap">{singleRowData[5]}</td>
      <td className="p-3 whitespace-nowrap">
        <span
          className={`${
            singleRowData[2] === "cheap" && "text-green-800 bg-green-200"
          } ${
            singleRowData[2] === "expensive" && "text-yellow-800 bg-yellow-200"
          } p-1.5 font-bold text-center rounded-lg bg-opacity-50 font-sans text-[0.75rem] tracking-wider`}
        >
          {singleRowData[2].toUpperCase()}
        </span>
      </td>
      <td className="p-3 whitespace-nowrap text-center">{singleRowData[6]}</td>
      <td className="p-3 whitespace-nowrap text-center">{singleRowData[7]}</td>
    </Fragment>
  );
};

export default BooksDataTable;
