import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthUserContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const Navber = () => {
  const { user, logoutUser, setUser, userName } = useContext(AuthUserContext);

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
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <h2>{userName}</h2>
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end flex items-center gap-3">
          {user ? (
            <img
              title={user.displayName}
              className="w-[60px] h-[60px] rounded-full"
              src={user?.photoURL}
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
            <Link
              to="/login"
              className="px-5 py-2 text-lg rounded-md bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
