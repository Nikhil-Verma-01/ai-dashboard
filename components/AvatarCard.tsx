import { AvatarCardProps } from '@/index';
import Image from 'next/image';

const AvatarCard = ({ user }: AvatarCardProps) => {
  // Add a fallback image and handle potential missing data
  const fallbackAvatar = "https://via.placeholder.com/150";
  
  // Add null checks for all user properties
  if (!user) return null;
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-4 flex flex-col items-center">
        <div className="relative w-24 h-24">
          <Image 
            src={user.avatar || fallbackAvatar}
            alt={`${user.first_name || 'User'}'s avatar`}
            className="rounded-full object-cover border-4 border-gray-200"
            fill
            sizes="(max-width: 96px) 100vw, 96px"
          />
        </div>
        
        <div className="mt-4 text-center">
          <h2 className="text-xl font-semibold text-gray-800">
            {`${user.first_name || ''} ${user.last_name || ''}`}
          </h2>
          <p className="text-gray-600 mt-1">{user.email || 'No email available'}</p>
          <div className="mt-4">
            <a 
              href={`mailto:${user.email}`}
              className="inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarCard;