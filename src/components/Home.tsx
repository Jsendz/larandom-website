import React from 'react'

export default function Home () {
  return (
    <div className='w-full h-full md:h-screen'>
        <div className='w-full h-full bg-banner bg-cover bg-no-repeat'>
            <div className='w-[90%] h-full md:h-screen backdrop-blur-md text-slate-100 flex flex-col justify-evenly items-center m-auto '>
            <h1 className='text-5xl p-5 font-extrabold'> Que es LaRandom?</h1>
            <h2 className='text-3xl p-5 font-bold text-yellow-300'>LA REVOLUCIÓ</h2>
            <p className='text-xl p-5 text-center'>Ens autodefinim molt humilment com un col·lectiu creatiu amb ganes de donar-li una volta a l’escena sociocultural actual d’Andorra.</p>
            <button className='p-5 bg-red-400 rounded-2xl'>Comprar tickets</button>
            </div>
        </div>
    </div>
  )
}
