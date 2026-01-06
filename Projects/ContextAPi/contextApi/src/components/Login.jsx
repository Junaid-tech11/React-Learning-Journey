import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {

    const [username, setUsername] = useState('')
    const [password, setpassword] = useState('')

    const { setUser } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ username, password })
    }

    return (
        <div className='flex flex-col items-center justify-center min-h-[50vh]'>
            <div className='bg-gray-700 p-8 rounded-xl shadow-lg flex flex-col gap-4 w-80'>

                <h2 className='text-2xl font-bold text-white text-center'>Login</h2>

                <input
                    className='p-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-500'
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="username"
                />

                <input
                    className='p-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-500'
                    type="password" // 👈 Changed to "password" so it hides characters
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    placeholder="password"
                />

                <button
                    className='bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded transition-all'
                    onClick={handleSubmit}
                >
                    Submit
                </button>

            </div>
        </div>
    )

}

export default Login