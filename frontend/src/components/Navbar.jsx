import { LayoutTemplate } from 'lucide-react'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ProfileInfoCard from './Cards'
import { UserContext } from '../context/userContext'

const Navbar = () => {
  const { user } = useContext(UserContext)

  return (
    <div className='h-[64px] bg-white border-b border-slate-200 sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-full'>

        {/* Logo */}
        <Link to='/' className='flex items-center gap-2.5 flex-shrink-0'>
          <div className='w-8 h-8 bg-gradient-to-br from-[#3B5BDB] to-[#5C7CFA] rounded-lg flex items-center justify-center'>
            <LayoutTemplate className='text-white' size={16} />
          </div>
          <span className='text-lg font-black text-[#0D1B4B] tracking-tight'>CraftCV</span>
        </Link>

        {/* Right — Profile (no card box, just avatar + name + logout inline) */}
        <ProfileInfoCard />

      </div>
    </div>
  )
}

export default Navbar
