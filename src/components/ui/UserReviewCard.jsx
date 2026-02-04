import React from 'react';
import { Heart, ChevronRight } from 'lucide-react';

function UserReviewCard({ user }) {
  return (
    <>
      <div className='w-[400px] relative mt-4 h-[430px] group mx-auto bg-white border rounded-md text-black flex flex-col shadow-lg'>
        <div className='w-full rounded-t-md h-[350px] group-hover:h-[410px] overflow-hidden transition-all duration-300'>
          <img
            src={user?.image}
            alt={user?.name}
            className='h-full w-full scale-105 group-hover:scale-100 grayscale group-hover:grayscale-0 object-cover transition-all duration-300'
          />
        </div>
        <article className='relative overflow-hidden grow'>
          <div className='info p-2 translate-y-0 group-hover:-translate-y-20 transition-all duration-300'>
            <p className='md:text-2xl font-semibold'>{user?.name}</p>
            <p className='sm:text-base text-sm flex items-center gap-1'>
              <span className='text-yellow-500'>⭐⭐⭐</span>
              {user?.rating} •
            </p>
          </div>
          <div className='absolute -bottom-8 opacity-0 group-hover:opacity-100 group-hover:bottom-3 transition-all duration-300 w-full px-4'>
            <p className='text-3xl text-gray-600 italic'>{user?.userExp} years With Us</p>
          </div>
        </article>
      </div>
    </>
  );
}

export default UserReviewCard;
