import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BASE_URL from "../config";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingUser, setEditingUser] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteUserId, setDeleteUserId] = useState(null);
  const [formSubmitloading, setFormSubmitloading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);


  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/all`);
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setShowEditModal(true);
  };

  const handleDelete = async () => {
    setDeleteLoading(true); // Start loading

    try {
      await axios.delete(`${BASE_URL}/delete/${deleteUserId}`);
      toast.success("User deleted successfully!");
      setUsers(users.filter((user) => user._id !== deleteUserId));
      setShowDeleteConfirm(false);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
    finally {
      setDeleteLoading(false); // Stop loading
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setFormSubmitloading(true); // Disable submit button and show loading state

    try {
      await axios.put(`${BASE_URL}/update/${editingUser._id}`, editingUser);
      toast.success("User updated successfully!");
      setUsers(users.map((user) => (user._id === editingUser._id ? editingUser : user)));
      setShowEditModal(false);
    } catch (error) {
      console.error("Error updating user:", error);
    }
    finally{
      setFormSubmitloading(false)
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Users List</h2>
      {loading ? (
        <div className="text-center text-lg font-semibold">Loading users...</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="py-2 px-4">Name</th>
                <th className="py-2 px-4">Email</th>
                <th className="py-2 px-4">Phone</th>
                <th className="py-2 px-4">YouTube</th>
                <th className="py-2 px-4">Instagram</th>
                <th className="py-2 px-4">City</th>
                <th className="py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} className="border-b hover:bg-gray-100">
                  <td className="py-2 px-4">{user.name}</td>
                  <td className="py-2 px-4">{user.email}</td>
                  <td className="py-2 px-4">{user.phone}</td>
                  <td className="py-2 px-4">
                    <a href={user.youtube} target="_blank" rel="noopener noreferrer" className="text-blue-600">
                      YouTube
                    </a>
                  </td>
                  <td className="py-2 px-4">
                    <a href={user.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-600">
                      Instagram
                    </a>
                  </td>
                  <td className="py-2 px-4">{user.city}</td>
                  <td className="py-2 px-4 flex gap-2">
                    <button onClick={() => handleEdit(user)} className="text-green-600">
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => {
                        setShowDeleteConfirm(true);
                        setDeleteUserId(user._id);
                      }}
                      className="text-red-600"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Edit User Modal */}
      {showEditModal && editingUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h3 className="text-lg font-semibold mb-4">Edit User</h3>
            <form onSubmit={handleUpdate}>
              <input
                type="text"
                value={editingUser.name}
                onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
                className="w-full mb-2 p-2 border rounded"
              />
              <input
                type="email"
                value={editingUser.email}
                onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
                className="w-full mb-2 p-2 border rounded"
              />
              <input
                type="text"
                value={editingUser.phone}
                onChange={(e) => setEditingUser({ ...editingUser, phone: e.target.value })}
                className="w-full mb-2 p-2 border rounded"
              />
              <input
                type="text"
                value={editingUser.youtube}
                onChange={(e) => setEditingUser({ ...editingUser, youtube: e.target.value })}
                className="w-full mb-2 p-2 border rounded"
              />
              <input
                type="text"
                value={editingUser.instagram}
                onChange={(e) => setEditingUser({ ...editingUser, instagram: e.target.value })}
                className="w-full mb-2 p-2 border rounded"
              />
              <input
                type="text"
                value={editingUser.city}
                onChange={(e) => setEditingUser({ ...editingUser, city: e.target.value })}
                className="w-full mb-2 p-2 border rounded"
              />
              <div className="flex justify-end gap-2 mt-4">
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded" disabled={formSubmitloading}>
                {formSubmitloading ? "Updating..." : "Update"}

                </button>
                <button
                  type="button"
                  onClick={() => setShowEditModal(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-80">
            <h3 className="text-lg font-semibold mb-4">Confirm Delete</h3>
            <p className="mb-4">Are you sure you want to delete this user?</p>
            <div className="flex justify-end gap-2">
              <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded" disabled={deleteLoading}>
                {deleteLoading ? "Deleting..." : "Delete"}
              </button>
              <button onClick={() => setShowDeleteConfirm(false)} className="bg-gray-500 text-white px-4 py-2 rounded">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersPage;
