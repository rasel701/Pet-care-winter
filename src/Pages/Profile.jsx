import React, { useContext, useState } from "react";
import { AuthUserContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import { MdOutlineSystemUpdateAlt } from "react-icons/md";
import { BsFillSaveFill } from "react-icons/bs";
import { IoArrowBackCircle } from "react-icons/io5";
const Profile = () => {
  const { user, updateUserProfile, setUser } = useContext(AuthUserContext);
  const [update, setUpdate] = useState(false);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photo.value;
    updateUserProfile({ displayName: name, photoURL })
      .then(() => {
        toast.success("Name and photoURL update successfully");
        setUser({ ...user, displayName: name, photoURL });
        console.log(user);
        e.target.reset();
        setUpdate(false);
      })
      .catch((errro) => {
        toast.error(errro.message);
        console.log(errro);
      });
  };

  return (
    <div className=" mt-6">
      <div>
        {update ? (
          <div className="lg:max-w-[60%] mx-auto bg-blue-200 px-6 py-5 rounded-lg">
            <button
              onClick={() => setUpdate(!update)}
              type="button"
              className="btn bg-cyan-500 "
            >
              <IoArrowBackCircle size={26} />
              Back
            </button>
            <form
              onSubmit={handleUpdateProfile}
              className="flex justify-center items-center flex-col gap-1 shadow-2xl mt-2 bg-gray-50 rounded-lg p-3 lg:w-[70%] mx-auto"
            >
              <label className="text-lg text-gray-400" htmlFor="">
                Photo-URL
              </label>
              <input
                className="border-2 px-4 py-1 rounded-lg w-[80%]"
                type="text"
                placeholder="photo-URL"
                name="photo"
                required
              />
              <label className="text-lg text-gray-400" htmlFor="">
                Name
              </label>
              <input
                className="border-2 px-4 py-1 rounded-lg w-[80%]"
                type="text"
                placeholder="Name"
                name="name"
                required
              />
              <button type="submit" className="btn bg-amber-500 my-6">
                <BsFillSaveFill size={20} />
                Save
              </button>
            </form>
          </div>
        ) : (
          <div className="bg-gray-300 lg:max-w-[70%] mx-auto px-6 py-6 rounded-lg">
            <div className="flex flex-col  justify-center items-center">
              <img
                className="w-[250px] h-[250px] object-cover rounded-full"
                src={user?.photoURL}
                alt=""
              />
              <h2 className="text-2xl font-bold mt-2 text-center">
                {user?.displayName}
              </h2>
              <h3 className="text-center">{user?.email}</h3>
              <button onClick={() => setUpdate(!update)} className="btn mt-3">
                <MdOutlineSystemUpdateAlt size={20} />
                Update Profile
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
