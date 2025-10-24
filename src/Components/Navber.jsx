import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthUserContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const Navber = () => {
  const { user, logoutUser, setUser } = useContext(AuthUserContext);

  // console.log(user?.reloadUserInfo?.photoURL);
  const handleLogoutUser = () => {
    logoutUser()
      .then(() => {
        toast.success("Logout successfully !");
        setUser(null);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/services"}>Services</NavLink>
      </li>
      <li>
        <NavLink to={"/profile"}>My Profile</NavLink>
      </li>
    </>
  );

  return (
    <div className="">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu z-10 menu-sm dropdown-content bg-base-100 rounded-box  mt-3 w-52 p-2 shadow text-[16px] font-semibold"
            >
              {links}
            </ul>
          </div>
          <div className="w-[100px]">
            <img
              className="w-full h-15 object-cover "
              src="https://t3.ftcdn.net/jpg/05/83/61/82/360_F_583618203_CwsMPkc6yoMBLOWsqD4doSyzedqI2qz5.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[16px] font-semibold">
            {links}
          </ul>
        </div>
        <div className="navbar-end flex items-center gap-3">
          {user ? (
            <img
              title={user?.displayName}
              className="w-[60px] h-[60px] rounded-full"
              src={user?.photoURL || user?.reloadUserInfo?.photoURL}
              alt=""
            />
          ) : (
            ""
          )}

          {user ? (
            <button
              onClick={handleLogoutUser}
              className="px-5 py-2 text-lg rounded-md bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none cursor-pointer"
            >
              Logout
            </button>
          ) : (
            <button className="px-5 py-2 text-lg rounded-md bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none">
              <Link to="/login">Login</Link>
              {" / "}
              <Link to={"/register"}>Register</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
