import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faRightFromBracket,
  faBell,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="p-5 h-[5rem] shadow flex items-center justify-end sm:justify-between">
      <p className="text-[1.25rem] text-slate-500 hidden sm:block">
        <FontAwesomeIcon icon={faHouse} />
        <span className="px-2">/</span>
        <span>Management</span>
        <span className="px-2">/</span>
        <span>{props.title}</span>
      </p>
      <div className="relative whitespace-nowrap pl-4 top-2">
        <FontAwesomeIcon
          icon={faMessage}
          className="text-[1.5rem] text-slate-500 "
        />
        <span className="absolute rounded-full w-6 h-6 text-white bg-red-500 right-[68px] top-[-10px] text-center font-bold">
          2
        </span>
        <FontAwesomeIcon
          icon={faBell}
          className="text-[1.5rem] text-slate-500 px-4"
        />
        <span className="absolute rounded-full w-6 h-6 text-white bg-red-500 right-[30px] top-[-10px] text-center font-bold">
          1
        </span>
        <Link to="/login">
          <FontAwesomeIcon
            icon={faRightFromBracket}
            className="text-[1.5rem] text-slate-500 "
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
