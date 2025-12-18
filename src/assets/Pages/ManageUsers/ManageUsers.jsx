import React, { useEffect, useState } from 'react'
import "./ManageUser.css"
import UserForm from '../../../Components/UserForm/UserForm'
import UserList from '../../../Components/UserList/UserList'
import { fetchUser } from '../../../Service/userService'
// import userService from "../../../Service/userService"
const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);



  useEffect(() => {
    async function loadUsers() {
      try {
        setLoading(true);
        const response = await fetchUser();
        setUsers(response.data);

      } catch (error) {
        console.error(error);
        toast.error("Unable to fetch users");
      } finally {
        setLoading(false);
      }
    }
    loadUsers();
  },[]);
  return (
    <div className="user-container text-light">
      <div className="left-column">
        <UserForm setUsers={setUsers}/>
      </div>
      <div className="right-column">
        <UserList users={users} setUsers={setUsers}/>
      </div>
    </div>
  )
}

export default ManageUsers