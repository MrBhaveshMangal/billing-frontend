import React from 'react'
import "./ManageUser.css"
import UserForm from '../../../Components/UserForm/UserForm'
import UserList from '../../../Components/UserList/UserList'
const ManageUsers = () => {
  return (
    <div className="user-container text-light">
        <div className="left-column">
            <UserForm/>
        </div>
        <div className="right-column">
            <UserList/>
        </div>
    </div>
  )
}

export default ManageUsers