"use client"
import { ModalProps } from '@/index'
import React from 'react'
import { ProfileForm } from './ProfileForm';

const CreateAvatar = ({isOpen, setIsOpen}: ModalProps) => {
    if(!isOpen) return null;

  return (
    <div className='fixed inset-0  bg-opacity-50 flex items-center justify-center z-50'>
        <div className='bg-blue-200 p-6 rounded-xl w-96 relative'>
            <h2 className='text-xl text-gray-500 font-bold mb-4'>
                Create New Avatar
            </h2>
            <ProfileForm/>
            {/* <input 
            placeholder='Name'
            type='file'
            className='w-full mb-3 px-3 py-2 border rounded-b-sm'/> */}
            <div className='flex justify-end space-x-2'>
                <button 
                    onClick={() => setIsOpen(false)}
                    className='px-4 py-2 bg-gray-600 rounded hover:bg-gray-400'
                >
                    Cancel
                </button>
                <button className='px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-500'>
                    Create
                </button>
            </div>
        </div>
    </div>
  )
}

export default CreateAvatar