import { UserButton } from '@clerk/clerk-react'
import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
      <div className='p-3 px-5 flex justify-between shadow-md'>
          <img src="/logo.svg" width={100} height={100} />
          <Link to={'/auth/sign-in'}><Button>Get Started</Button></Link>
    </div>
  )
}

export default Header