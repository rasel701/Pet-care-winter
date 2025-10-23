import React, { useContext, useState } from "react";
import { IoIosEyeOff } from "react-icons/io";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router";
import { AuthUserContext } from "../assets/context/AuthContext";
import toast from "react-hot-toast";

const Login = () => {
  const { loginUser } = useContext(AuthUserContext);
  const [show, setShow] = useState(false);

  const handleLoginUser = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then((res) => {
        console.log(res);
        toast.success("Login Successfully !");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  return (
    <div>
      <main className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
        <section className="flex w-[480px] flex-col  p-4 ">
          <div className="text-center text-4xl font-medium">Log In</div>

          <form onSubmit={handleLoginUser} className="space-y-7">
            <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500 p-1.5">
              <input
                type="email"
                name="email"
                placeholder="Email "
                required
                className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
              />
            </div>

            <div className="w-full p-1.5  transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500 relative">
              <input
                type={show ? "text" : "password"}
                placeholder="Password"
                name="password"
                required
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
            <div className="flex justify-center items-center my-5">
              <button className="transform rounded-sm bg-indigo-600 py-3 font-bold duration-300 cursor-pointer px-7 ">
                LOG IN
              </button>
            </div>
          </form>

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
