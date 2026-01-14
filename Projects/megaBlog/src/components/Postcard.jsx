import React from 'react'
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {

    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full rounded-xl p-4 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-1 
            bg-white dark:bg-gray-800/50 dark:backdrop-blur-sm dark:border dark:border-gray-700/50'>

                <div className='w-full justify-center mb-4 relative overflow-hidden rounded-xl'>
                    <img
                        src={appwriteService.getFileView(featuredImage)}
                        alt={title}
                        className='rounded-xl object-cover w-full h-48 transition-transform duration-500 hover:scale-110'
                    />
                </div>

                <h2 className='text-xl font-bold text-gray-800 dark:text-gray-100 line-clamp-2 group-hover:text-cyan-400 transition-colors'>
                    {title}
                </h2>
            </div>
        </Link>
    )
}

export default PostCard