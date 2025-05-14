
import { User } from '@/index';
import React, { useEffect, useState } from 'react'
import AvatarCard from './AvatarCard';

const GridCards = () => {
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
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-medium text-center mb-8'>Users Avatar</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {users.map((user) => (
            <AvatarCard key={user.id} user={user} />
          ))
        }
      </div>
    </div>
  )
}

export default GridCards