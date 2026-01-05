import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github () {
  const data = useLoaderData()

  return (
    <div className='text-center m-5 bg-gray-500 text-white p-4 text-3xl'>
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt='Git picture' width={200} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/Junaid-tech11')
  return response.json()
}
