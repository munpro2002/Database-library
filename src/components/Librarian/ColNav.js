import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpenReader,
  faBook,
  faUser,
  faCircleUser,
  faNoteSticky,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";

const menus = [
  {
    title: "Books",
    logo: faBook,
  },
  {
    title: "Customers",
    logo: faUser,
  },
  {
    title: "Staffs",
    logo: faCircleUser,
  },
  {
    title: "Loan Bills",
    logo: faNoteSticky,
  },
  {
    title: "Return Bills",
    logo: faNoteSticky,
  },
];

const ColNav = (props) => {
  return (
    <div className="w-20 lg:w-64 bg-dark-purple h-screen duration-200 ease-linear fixed top-0 bottom-0">
      <div className="flex items-center h-[5rem] justify-center lg:justify-start text-white p-5 font-sans tracking-wider text-[1.25rem] shadow shadow-light-white">
        <FontAwesomeIcon
          className="text-[2rem] lg:pr-2"
          icon={faBookOpenReader}
        />
        <span className="hidden lg:inline-block text-[2rem]">Library</span>
      </div>
      {menus.map((menu, index) => {
        return (
          <li
            key={index}
            onClick={props.onChangeActiveCategory.bind(null, menu.title)}
            className={`flex items-center justify-center lg:justify-start list-none p-3 text-white text-[1.25rem] mt-1 hover:cursor-pointer ${
              props.activeTitle === menu.title
                ? "bg-light-white border-l-[3px] border-[#fe8a7d]"
                : "hover:bg-light-white"
            }`}
          >
            <FontAwesomeIcon className="lg:pr-4" icon={menu.logo} />
            <span className="whitespace-nowrap hidden lg:block">
              {menu.title}
            </span>
          </li>
        );
      })}
    </div>
  );
};

export default ColNav;
