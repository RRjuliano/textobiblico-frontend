import React from 'react'
import bannerImg from "../assets/biblia-aberta.jpg"
import { Link } from "react-router";

const About = () => {

    return (
        <div className='flex flex-col md:flex-row-reverse py-8 justify-between items-center gap-12'>
            <div className='md:w-1/2 w-full flex items-center md:justify-end'>
                <img className="rounded-xl" src={bannerImg} alt="" />
            </div>

            <div className='md:w-1/2 w-full px-4'>
                <h1 className='md:text-5xl text-4xl font-mono mb-7 text-zinc-700'>texto Biblico</h1>
                <p className='mb-10 text-zinc-600'>Compartilhe trechos da Bíblia. Para iniciar clique em pesquisar.</p>

                <button className='btn-primary bg-green-600 hover:bg-green-500 rounded-md'>
                    <Link to="/search" className='text-zinc-900 px-4 py-6'>Pesquisar</Link></button>
            </div>
        </div>
    )
}

export default About;
