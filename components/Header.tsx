import { User } from '@/index'
import React from 'react'

interface HeaderProps {
  user?: User;
}

const Header = ({user}: HeaderProps) => {
  return (
    <div className='w-full py-6 px-5 bg-blue-500 text-white shadow-md'>
        <h1 className='text-2xl font-semibold text-center'>Welcome Back, {user?.first_name}!</h1>
    </div>
  )
}

export default Header