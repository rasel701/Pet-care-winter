import React, { useContext, useRef, useState } from "react";
import { IoIosEyeOff } from "react-icons/io";
import { FaRegEye } from "react-icons/fa";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import { AuthUserContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { loginUser, googleLogin, forgetPassword } =
    useContext(AuthUserContext);
  const [show, setShow] = useState(false);
  const emailRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLoginUser = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then((res) => {
        toast.success("Login Successfully !");
        e.target.reset();
        navigate(location.state ? location.state?.pathname : "/");
      })
      .catch((error) => {
        // console.log(error);
        toast.error(error.message);
      });
  };

  const handleGooogleLogin = () => {
    googleLogin()
      .then((res) => {
        toast.success("Google login successfully!");
        navigate(location.state ? location.state?.pathname : "/");
      })
      .catch((error) => {
        // console.log(error);
        toast.error(error.message);
      });
  };

  const handleResetPassword = () => {
    const email = emailRef.current.value;
    if (email === "") {
      toast.error("Please enter your email");
      return;
    }

    navigate("/forgot-password", { state: { email } });
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
                ref={emailRef}
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
              <button
                type="submit"
                className="transform rounded-sm bg-indigo-600 py-3 font-bold duration-300 cursor-pointer px-7 "
              >
                LOG IN
              </button>
            </div>
          </form>

          <div className="flex justify-center">
            <button
              onClick={handleGooogleLogin}
              className="flex justify-center items-center border-1 px-10 py-2 gap-2 rounded-lg my-2 cursor-pointer border-gray-400"
            >
              <FcGoogle size={26} />{" "}
              <span className="text-[17px]">Login with google</span>
            </button>
          </div>

          <button
            onClick={handleResetPassword}
            className="transform text-center font-semibold text-gray-500 py-2 hover:underline "
          >
            FORGOT PASSWORD?
          </button>

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
