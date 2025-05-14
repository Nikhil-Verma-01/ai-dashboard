'use client';

import CreateAvatar from '@/components/CreateAvatar';
import GridCards from '@/components/GridCards';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
//import { UserProps } from '@/index';


const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const [users, setUsers] = useState<UserProps[]>([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
   const [showModal, setShowModal] = useState(false);

  // // eslint-disable-next-line react-hooks/rules-of-hooks
  // useEffect(() => {
  //   fetch("https://reqres.in/api/users?page=1")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if(data && Array.isArray(data.data)){
  //         setUsers(data.data.slice(0,3));
  //       } else{
  //         console.error("Invalid response structure:", data)
  //       }
  //     })
  //     .catch((err) => console.error(err))
  // }, []);

  // const firstName = users.first_name 
  return (
    <div className='min-h-screen bg-gray-100'>

      <Header />
      <div className='flex items-center justify-center mt-5 py-4'>
        <h2 className='text-xl text-blue-600 font-semibold mb-5'>Your Avatars</h2>
        <GridCards/>

      </div>

     

      <Button 
        className='text-blue-500 border-2 rounded-2xl '
        onClick={() => setShowModal(true)}  
      >
        + Create New Avatar
      </Button>

      <CreateAvatar isOpen={showModal} setIsOpen={setShowModal}/>
    </div>
  )
}

export default page