
import React from 'react';
import Newsletter from './Newsletter';
import Image from 'next/image';


const ComingSoon = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white">
      <div className="text-center w-full flex-col justify-center items-center pt-10 md:pt-0">
        <div className='w-full'>
        <h1 className=" text-4xl md:text-6xl font-bold">Proximament!</h1>
        <p className="mt-4 text-xl">Estem treballant dur per preparar aquesta pàgina per a tu. Estigueu atents!</p>
        </div>
        <div className='w-full'>
        <Image src="/smiley.png" alt="founder's photo" width={300} height={300} className="w-1/3 mx-auto mt-10" />
        
        </div>
      </div>
        <div className="mt-8 w-full">
         
          <Newsletter />
        </div>
    </div>
  );
};

export default ComingSoon;