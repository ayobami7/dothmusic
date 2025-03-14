import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='bg-transparent flex flex-row items-center justify-between w-full'>
        <div>
            <p>Logo</p>
        </div>

        <div>
            <nav className=''>
                <Link href="">FILM</Link>
                <Link href="">MUSIC</Link>
                <Link href="">ARTICLE</Link>
            </nav>
        </div>

        <div>
            <p>Search</p>
        </div>
    </header>
  )
}

export default Navbar