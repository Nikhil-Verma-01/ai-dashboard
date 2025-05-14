'use client';

import AvatarCard from '@/components/AvatarCard';
import CreateAvatar from '@/components/CreateAvatar';

import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { User } from '@/index';
import React from 'react';
import { useEffect, useState } from 'react';
//import { UserProps } from '@/index';


const page = () => {
  
   const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://reqres.in/api/users?page=1");

        if(!response){
          throw new Error('Failed to fetch the users');
        }

        const result = await response.json();

        const userData = result && result.data && Array.isArray(result.data) 
            ? result.data 
            : [];

        setUsers(userData);
        setError(null);

      } catch (error) {
        setError('Error fetching users. Please try again later.');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);
 
  
  return (
    <div className='min-h-screen bg-gray-100'>

      <Header />
      <div className='flex items-center justify-center mt-5 py-4'>
        
        <div className='container mx-auto px-4 py-8'>
          <h1 className='text-3xl font-medium text-center mb-8'>Users Avatar</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {users.map((user) => (
            <AvatarCard key={user.id} user={user} />
            ))
          }
        </div>
    </div>
      </div>

     

      <Button 
        className='text-white border-2 rounded-2xl bg-blue-500  '
        onClick={() => setShowModal(true)}  
      >
        + Create New Avatar
      </Button>

      <CreateAvatar isOpen={showModal} setIsOpen={setShowModal}/>
    </div>
  )
}

export default page