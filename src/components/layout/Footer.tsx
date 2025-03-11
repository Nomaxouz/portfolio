import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Head from "/public/images/head1.png";
import Logo from "/public/images/logo2.svg";
import Behance from "/public/images/behance.svg";
import LinkedIn from "/public/images/linkedin.svg";
import Insta from "/public/images/insta.svg";

const Footer = () => {
  return (
    <footer className='bg-white text-dGreen py-24 px-32 flex justify-between rounded-t-xxxl'>
        <div className="logo">
            <Image src={Logo} alt="Tête de Dylan Thomas dessiné" width="100" height="100"></Image>
        </div>
        <div className='flex flex-col items-end justify-end gap-6'>
            <nav className="flex gap-20 items-center">
              <Link href="#pres" className='border-2 border-dGreen rounded-3xl py-2 px-16 transition-all hover:bg-dGreen hover:text-white'>Présentation</Link>
              <Link href="#projects" className='border-2 border-dGreen rounded-3xl py-2 px-16 transition-all hover:bg-dGreen hover:text-white'>Identités</Link>
              <Link href="#motions" className='border-2 border-dGreen rounded-3xl py-2 px-16 transition-all hover:bg-dGreen hover:text-white'>Motion</Link>
            </nav>
            <ul className="links flex gap-4 items-center">
                <li className="flex gap-4">
                    <a href="https://www.behance.net/dylanthomas" target="_blank" rel="noreferrer">
                    <Image src={Behance} alt="Logo de Behance"></Image>
                    </a>
                </li>
                <li className="flex gap-4">
                    <a href="https://www.linkedin.com/in/dylan-thomas-0b2b2b1b9/" target="_blank" rel="noreferrer">
                    <Image src={LinkedIn} alt="Logo de LinkedIn"></Image>
                    </a>
                </li>
                <li className="flex gap-4">
                    <a href="https://www.instagram.com/dylanthomas_/" target="_blank" rel="noreferrer">
                    <Image src={Insta} alt="Logo de Instagram"></Image>
                    </a>
                </li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer