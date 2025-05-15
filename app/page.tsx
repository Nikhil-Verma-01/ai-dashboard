"use client"
import AvatarCard from '@/components/AvatarCard';
import CreateAvatar from '@/components/CreateAvatar';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';


const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://reqres.in/api/users?page=1");
        
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }

        const result = await response.json();
        
        const userData = result?.data || [];
        
        if (userData.length > 0) {
          setCurrentUser(userData[0]); // Set first user as current user
        }
        
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
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header user={currentUser} />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-medium text-center mb-8">Users Avatar</h1>
        
        {loading ? (
          <div className="text-center py-10">Loading users...</div>
        ) : error ? (
          <div className="text-center text-red-500 py-10">{error}</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {users.map((user) => (
              <AvatarCard key={user.id} user={user} />
            ))}
          </div>
        )}
      </main>

      <div className="fixed bottom-8 right-8">
        <Button 
          className="text-white bg-blue-500 hover:bg-blue-600 shadow-md rounded-2xl px-4 py-2"
          onClick={() => setShowModal(true)}  
        >
          + Create New Avatar
        </Button>
      </div>

      <CreateAvatar isOpen={showModal} setIsOpen={setShowModal} />

    </div>
  );
};

export default Page;