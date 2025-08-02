import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { setUser } from "../app/slices/authSlice";
import EditProfileModal from "./EditProfileModel";

const CustomerProfile = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const getInitials = (name = "") =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

  return (
    <div className="pt-24 px-4 min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8">
        {/* Profile Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-24 h-24 rounded-full bg-blue-600 text-white flex items-center justify-center text-3xl font-bold mb-3">
            {getInitials(user?.name || "U S")}
          </div>
          <h2 className="text-2xl font-semibold">
            {user?.firstName || "First"} {user?.lastName || "Last"}
          </h2>
          <p className="text-gray-500 dark:text-gray-400">{user?.email}</p>
        </div>

        {/* Profile Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div>
            <p className="text-sm text-gray-500">First Name</p>
            <p className="text-lg font-medium">{user?.firstName}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Last Name</p>
            <p className="text-lg font-medium">{user?.lastName}</p>
          </div>
          <div className="md:col-span-2">
            <p className="text-sm text-gray-500">Email</p>
            <p className="text-lg font-medium">{user?.email}</p>
          </div>
        </div>

        {/* Order History Placeholder */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Order History</h3>
          <div className="bg-gray-100 dark:bg-gray-700 rounded-md p-4 text-center text-sm text-gray-500 dark:text-gray-300">
            Order history feature coming soon...
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
            Reset Password
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md">
            {user?.portalEnabled ? "Disable Portal" : "Enable Portal"}
          </button>
          {user?.role === "admin" && (
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md">
              Impersonate
            </button>
          )}
        </div>

        {/* Edit Profile Button */}
        <div className="text-center mt-6">
          <button
            onClick={() => setIsEditing(true)}
            className="mt-2 text-blue-600 hover:underline"
          >
            Edit Profile
          </button>
        </div>

        {isEditing && (
          <EditProfileModal
            user={user}
            onClose={() => setIsEditing(false)}
            onSave={(data) => console.log("Save logic here", data)}
          />
        )}
      </div>
    </div>
  );
};

export default CustomerProfile;
