import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { IoIosEyeOff } from "react-icons/io";
import { FaRegEye } from "react-icons/fa";

const Register = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto  my-20">
        <div className="card-body">
          <h2 className="text-3xl text-center font-bold text-gray-500">
            Signup
          </h2>
          <form>
            <fieldset className="fieldset">
              {/* Name */}
              <label className="label">Name</label>
              <input
                type="text"
                className="input outline-none"
                placeholder="Name"
              />

              {/* Photo-URL */}
              <label className="label">Photo-URL</label>
              <input
                type="text"
                className="input outline-none"
                placeholder="Photo-URL"
              />

              {/* Email */}
              <label className="label">Email</label>
              <input
                type="email"
                className="input outline-none"
                placeholder="Email"
              />
              {/* Password */}
              <div className="relative">
                <label className="label">Password</label>
                <input
                  type={show ? "text" : "password"}
                  className="input outline-none"
                  placeholder="Password"
                />
                {show ? (
                  <FaRegEye
                    onClick={() => setShow(!show)}
                    size={25}
                    className="absolute right-6 top-7 cursor-pointer z-10"
                  />
                ) : (
                  <IoIosEyeOff
                    onClick={() => setShow(!show)}
                    size={25}
                    className="absolute right-6 top-7 cursor-pointer z-10"
                  />
                )}
              </div>

              <button className="btn btn-neutral mt-4">SignUp</button>
            </fieldset>
          </form>
          <div className="flex justify-center">
            <button className="flex justify-center items-center border-1 px-5 py-2 gap-2 rounded-lg my-2 cursor-pointer border-gray-400">
              <FcGoogle size={26} />{" "}
              <span className="text-[17px]">Login width google</span>
            </button>
          </div>
          <p className="text-center">
            Already have an account?{" "}
            <Link
              to={"/login"}
              className="text-[15px] text-blue-500 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
