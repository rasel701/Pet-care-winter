import React, { useContext, useState } from "react";
import { AuthUserContext } from "../context/AuthContext";
import toast from "react-hot-toast";

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
      })
      .catch((errro) => {
        toast.error(errro.message);
        console.log(errro);
      });
  };

  return (
    <div className="flex justify-center flex-col items-center mt-6">
      <div>
        {update ? (
          <div className="">
            <button
              onClick={() => setUpdate(!update)}
              type="button"
              className="btn bg-cyan-500 "
            >
              Back
            </button>
            <form
              onSubmit={handleUpdateProfile}
              className="flex justify-center items-center flex-col gap-1"
            >
              <label htmlFor="">Photo-URL</label>
              <input
                className="border-2 px-4 py-1 rounded-lg"
                type="text"
                placeholder="photo-URL"
                name="photo"
                required
              />
              <label htmlFor="">Name</label>
              <input
                className="border-2 px-4 py-1 rounded-lg"
                type="text"
                placeholder="Name"
                name="name"
                required
              />
              <button type="submit" className="btn bg-amber-500 my-6">
                Save
              </button>
            </form>
          </div>
        ) : (
          <div className="flex flex-col">
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
              Update Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
