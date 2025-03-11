import Link from 'next/link'
import Image from 'next/image'
import Logo from '/public/images/logo.svg'

export default function Header() {
  return (
    <header className=''>
        <nav className='flex justify-center items-center py-5 px-16 bg-dGreen text-white font-semibold'>
            <div className="flex gap-20 items-center">
              <Link href="/">
                <Image src={Logo} alt="Logo Dylan Production"></Image>
              </Link>
              <Link href="#pres" className='border-2 border-white rounded-3xl py-2 px-16 transition-all hover:bg-white hover:text-dGreen'>Présentation</Link>
              <Link href="#projects" className='border-2 border-white rounded-3xl py-2 px-16 transition-all hover:bg-white hover:text-dGreen'>Identités</Link>
              <Link href="#motions" className='border-2 border-white rounded-3xl py-2 px-16 transition-all hover:bg-white hover:text-dGreen'>Motion</Link>
            </div>
        </nav>
    </header>
  )
}