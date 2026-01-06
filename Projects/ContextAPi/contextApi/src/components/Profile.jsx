import React, { useContext } from "react";
import UserContext from '../context/UserContext'

function Profile() {
    const { user } = useContext(UserContext)
    if (!user) return <div className='text-center text-red-400 mt-4 text-xl'>Please Login 🔒</div>

    // If user exists, show a green welcome
    return <div className='text-center text-green-400 mt-4 text-xl font-bold'>Welcome, {user.username}! 🎉</div>
}






export default Profile