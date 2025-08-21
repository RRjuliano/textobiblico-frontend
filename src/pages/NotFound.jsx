import React from 'react';
import { Link } from 'react-router';

function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className='md:text-5xl text-2xl font-extralight mb-7 text-zinc-500'>DESCULPE..</h1>
      <h2 className='md:text-3xl text-xl font-medium mb-7 text-zinc-700'>Nenhum resultado foi encontrado..</h2>
      <button className='btn-primary bg-green-600 hover:bg-green-500 rounded-md'>
        <Link to="/search" className='text-zinc-900 px-4 py-6'>Pesquisar novamente</Link></button>
    </div>
  );
}

export default NotFound;