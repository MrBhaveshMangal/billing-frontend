import React, { useState } from 'react'
import { deleteUser } from '../../Service/userService';
import toast from 'react-hot-toast';

const UserList = ({ users, setUsers }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // ✅ SAFE FILTER
  const filteredUsers = Array.isArray(users)
    ? users.filter(user =>
        (user.name || user.email || "")
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      )
    : [];

  const deleteByUserId = async (id) => {
    try {
      await deleteUser(id);
      setUsers(prevUsers => prevUsers.filter(user => user.userId !== id));
      toast.success("User deleted");
    } catch (e) {
      console.error(e);
      toast.error("Unable to delete user");
    }
  };

  return (
    <div
      className="category-list-container"
      style={{ height: '100vh', overflowY: 'auto', overflowX: 'hidden' }}
    >
      {/* 🔍 SEARCH */}
      <div className="row pe-2">
        <div className="input-group mb-3">
          <input
            type="text"
            name="keyword"
            id="keyword"
            placeholder="Search by name or email"
            className="form-control"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="input-group-text bg-warning">
            <i className="bi bi-search"></i>
          </span>
        </div>
      </div>

      {/* 👤 USER LIST */}
      <div className="row g-3 pe-2">
        {filteredUsers.length === 0 && (
          <p className="text-center text-muted">No users found</p>
        )}

        {filteredUsers.map((user) => (
          <div key={user.userId} className="col-12">
            <div className="card p-3 bg-dark">
              <div className="d-flex align-items-center">
                <div className="flex-grow-1">
                  <h5 className="mb-1 text-white">
                    {user.name || "No Name"}
                  </h5>
                  <p className="mb-0 text-white">{user.email}</p>
                </div>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteByUserId(user.userId)}
                >
                  <i className="bi bi-trash"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
