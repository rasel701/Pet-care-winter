import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { IoIosEyeOff } from "react-icons/io";
import { FaRegEye } from "react-icons/fa";
import { AuthUserContext } from "../context/AuthContext";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";

const Register = () => {
  const { registerUser, user, setUser, googleLogin, registerUpdaeInfo } =
    useContext(AuthUserContext);
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const handleCreateUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!/[A-Z]/.test(password)) {
      setPasswordError("At least one uppercase letter required");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setPasswordError("At least one lowercase letter required");
      return;
    }
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      return;
    }

    registerUser(email, password)
      .then((response) => {
        const users = response.user;
        registerUpdaeInfo({ displayName: name, photoURL: photo })
          .then(() => {
            setUser(...users, { displayName: name, photoURL: photo });
            console.log(users);
            toast.success("Signup successfully !");
            e.target.reset();
            setPasswordError("");
            navigate("/");
          })
          .catch((error) => {
            toast.error(error.message);
            console.log(error);
          });
      })
      .catch((error) => {
        toast.error(error.message);
        console.log(error);
      });
  };

  const handleGooogleLogin = () => {
    googleLogin()
      .then((res) => {
        console.log(res);
        toast.success("Google login successfully!");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  return (
    <div className="">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto  my-20">
        <div className="card-body">
          <h2 className="text-3xl text-center font-bold text-gray-500">
            Signup
          </h2>
          <form onSubmit={handleCreateUser}>
            <fieldset className="fieldset">
              {/* Name */}
              <label className="label">Name</label>
              <input
                type="text"
                className="input outline-none"
                placeholder="Name"
                name="name"
                required
              />

              {/* Photo-URL */}
              <label className="label">Photo-URL</label>
              <input
                type="text"
                className="input outline-none"
                placeholder="Photo-URL"
                name="photo"
                required
              />

              {/* Email */}
              <label className="label">Email</label>
              <input
                type="email"
                className="input outline-none"
                placeholder="Email"
                name="email"
                required
              />
              {/* Password */}
              <div className="relative">
                <label className="label">Password</label>
                <input
                  type={show ? "text" : "password"}
                  className="input outline-none"
                  placeholder="Password"
                  name="password"
                  required
                />
                <div>
                  <p className="text-[14px] m-1 text-red-700">
                    {passwordError}
                  </p>
                </div>
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

              <button type="submit" className="btn btn-neutral mt-2">
                SignUp
              </button>
            </fieldset>
          </form>
          <div className="flex justify-center">
            <button
              onClick={handleGooogleLogin}
              className="flex justify-center items-center border-1 px-5 py-2 gap-2 rounded-lg my-2 cursor-pointer border-gray-400"
            >
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
