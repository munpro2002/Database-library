import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUnlockKeyhole } from "@fortawesome/free-solid-svg-icons";

const LoginForm = () => {
  const [loginFormRole, setLoginFormRole] = useState("librarian");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const navigate = useNavigate();

  const submitFormHandler = (e) => {
    e.preventDefault();

    console.log(emailValue, passwordValue);
    setEmailValue("");
    setPasswordValue("");

    navigate("/librarian");
  };

  return (
    <form
      onSubmit={submitFormHandler}
      className={`container max-w-xl mx-auto mt-40 p-3`}
    >
      <h1 className="text-center mb-2 font-bold text-[1.5rem] text-slate-600">
        {loginFormRole.toUpperCase()} SIGN IN
      </h1>
      <div className="flex justify-center mb-2 text-pink-500">
        <FontAwesomeIcon className="text-[2rem]" icon={faUnlockKeyhole} />
      </div>
      <input
        type="email"
        className="focus:outline-none p-3 w-full border-[2px] border-slate-200 rounded-md my-1"
        placeholder="Email Address"
        value={emailValue}
        onChange={(e) => {
          setEmailValue(e.target.value);
        }}
        required={true}
      />
      <input
        type="password"
        className="focus:outline-none p-3 w-full border-[2px] border-slate-200 rounded-md my-1"
        placeholder="Password"
        value={passwordValue}
        onChange={(e) => {
          setPasswordValue(e.target.value);
        }}
        required={true}
      />
      <button
        type="submit"
        className="bg-blue-500 p-3 w-full mt-1 text-white rounded-md font-bold"
      >
        SIGN IN
      </button>
      <p className="text-[0.75rem] text-center mt-1">
        Not a {loginFormRole === "librarian" ? "librarian" : "customer"}?{" "}
        <span
          onClick={() => {
            setLoginFormRole(
              loginFormRole === "librarian" ? "customer" : "librarian"
            );
          }}
          className="font-bold underline underline-offset-2 hover:cursor-pointer hover:text-blue-500"
        >
          Sign in as {loginFormRole}
        </span>
      </p>
    </form>
  );
};

export default LoginForm;
