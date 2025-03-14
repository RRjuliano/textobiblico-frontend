import React from 'react'
import footerLogo  from "../assets/footer-logo.png"

const Footer = () => {
  return (
    <footer className="bg-green-950 text-white py-10 px-4">
      {/* Top Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left Side - Logo and Nav */}
        <div className="md:w-1/2 w-full">
          <img src={footerLogo} alt="Logo" className="mb-5 w-36" />
          <ul className="flex flex-col md:flex-row gap-5">
            <li><a href="/" className="hover:text-primary">Pagina Inicial</a></li>
            <li><a href="/search" className="hover:text-primary">Pesquisa</a></li>
            <li><a href="/about" className="hover:text-primary">Sobre nós</a></li>
          </ul>
        </div>

        {/* Right Side - Newsletter */}
        <div className="md:w-1/2 w-full">
          <p className="mb-4">
            Inscreva-se na nossa Newsletter para receber novidades, noticias e mais !
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Insira seu Email"
              className="w-full px-4 py-2 rounded-l-md text-black"
            />
            <button className="bg-orange-600 hover:bg-orange-500 text-zinc-900 px-6 py-2 cursor-no-drop rounded-r-md">
              Aguarde..
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
