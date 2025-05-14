import { AvatarCardProps } from '@/index'
import Image from 'next/image'
import React from 'react'

const AvatarCard = ({user}: AvatarCardProps) => {
  return (
    <div className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300'>
      <div className='p-4 flex flex-col items-center'>

        <Image src={user.avatar} alt={`${user.first_name}`}
        className='w-24 h-24 rounded-full object-cover border-4 border-gray-200'/>
        
        <div className='mt-4 text-center'>
          <h2 className='text-xl font-semibold text-gray-800'>
            {`${user.first_name} ${user.last_name}`}
          </h2>
          <p className='text-gray-600 mt-1'>{user.email}</p>
          <div className='mt-4'>
            <a href={`mailto:${user.email}`}
            className='inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors'>
              Contact
            </a>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default AvatarCard