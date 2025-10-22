import React, { useState } from "react";
import { IoIosEyeOff } from "react-icons/io";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router";

const Login = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <main className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
        <section className="flex w-[480px] flex-col space-y-10 p-4">
          <div className="text-center text-4xl font-medium">Log In</div>

          <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500 p-1.5">
            <input
              type="text"
              placeholder="Email or Username"
              className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
            />
          </div>

          <div className="w-full p-1.5  transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500 relative">
            <input
              type={show ? "text" : "password"}
              placeholder="Password"
              className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none "
            />
            {show ? (
              <FaRegEye
                onClick={() => setShow(!show)}
                size={25}
                className="absolute right-0 top-2 cursor-pointer"
              />
            ) : (
              <IoIosEyeOff
                onClick={() => setShow(!show)}
                size={25}
                className="absolute right-0 top-2 cursor-pointer"
              />
            )}
          </div>

          <button className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 cursor-pointer">
            LOG IN
          </button>

          <a
            href="#"
            className="transform text-center font-semibold text-gray-500 "
          >
            FORGOT PASSWORD?
          </a>

          <p className="text-center text-lg">
            No account ? Please
            <Link
              to={"/register"}
              className="font-medium text-indigo-500 underline-offset-4 hover:underline"
            >
              {" "}
              SignUp
            </Link>
          </p>
        </section>
      </main>
    </div>
  );
};

export default Login;
