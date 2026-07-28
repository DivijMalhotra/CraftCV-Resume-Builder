import React, { useContext } from 'react'
import { UserContext } from '../context/userContext'
import Navbar from './Navbar'

const DashboardLayout = ({activeMenu, children}) => {

    const {user} = useContext(UserContext)


  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(160deg, #edf2ff 0%, #f0f5ff 40%, #f8faff 70%, #ffffff 100%)' }}>
        <Navbar activeMenu={activeMenu}/>
        {user && <div className='container mx-auto pt-6 pb-10'>{children}</div>}
    </div>
  )
}

export default DashboardLayout
