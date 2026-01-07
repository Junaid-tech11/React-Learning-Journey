import React, { useState } from "react";
import useAuth from "../Contexts/UserContext";

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { login } = useAuth()

    const handleSubmit = (e) => {
        e.preventDefault()
        login({ username, password })
    }
    return (
        <div className='w-full max-w-md bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700 p-8 transform transition-all hover:shadow-indigo-500/20'>

            <div className="text-center mb-8">
                <h2 className='text-3xl font-extrabold text-gray-900 dark:text-white mb-2'>Welcome Back</h2>
                <p className="text-gray-500 dark:text-gray-400">Enter your credentials to access the Chameleon</p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                {/* Username Field */}
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                    <input
                        className='w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all'
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="e.g., Ali_Dev"
                    />
                </div>

                {/* Password Field */}
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input
                        className='w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all'
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                    />
                </div>

                {/* Submit Button with Hover Animation */}
                <button
                    type="submit"
                    className='w-full mt-2 text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 font-bold rounded-lg text-lg px-5 py-3 text-center transition-all transform active:scale-95 shadow-lg shadow-indigo-500/30'
                >
                    Unlock Dashboard 🚀
                </button>
            </form>
        </div>
    )
}
export default Login