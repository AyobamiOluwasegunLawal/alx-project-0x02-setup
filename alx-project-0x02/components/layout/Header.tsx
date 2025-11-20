import Link from 'next/link'
import React, { ReactNode } from 'react'

const Header: React.FC<ReactNode> = () => {
  return (
    <>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </>
  )
}

export default Header