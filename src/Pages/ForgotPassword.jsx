import React, { useContext } from "react";
import { useLocation } from "react-router";
import { AuthUserContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const { forgetPassword } = useContext(AuthUserContext);
  const location = useLocation();
  console.log(location);

  const handelPasswordChange = () => {
    forgetPassword(location.state?.email)
      .then(() => {
        toast.success("Please check your email. and set new password");
        window.location.href = "https://mail.google.com";
      })
      .catch((error) => {
        toast.error(error.message);
        console.log(error);
      });
  };

  return (
    <div className="bg-gray-600 w-[320px] mx-auto my-15 rounded-lg p-7">
      <label htmlFor="" className="text-lg py-2 text-white">
        Your Email
      </label>
      <input
        type="text"
        className="input my-2 text-lg "
        value={location.state?.email}
      />
      <div className="flex justify-center items-center mt-2">
        <button onClick={handelPasswordChange} className="btn ">
          Reset
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
