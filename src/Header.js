import React from 'react'
import 
 { BsSearch, BsJustify}
 from 'react-icons/bs'

function Header({OpenSidebar}) {
  return (
    <header className='header'>
        
        <div className='header-right'>
            <BsSearch  className='icon'/>
        </div>
       
            
        
    </header>
  )
}

export default Header