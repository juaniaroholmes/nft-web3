import React from 'react'
import './Header.css'
import punkLogo from '../assets/assets/header/cryptopunk-logo.png'
import searchIcon from '../assets/assets/header/search.png'
import themeSwitchIcon from '../assets/assets/header/theme-switch.png'

const Header = () => {
    return (
        <div className='Header'> 
           <div className='logoContainer'>
                <img src={punkLogo} className='punkLogo' alt=''/>
           </div> 

           <div className='searchBar'>
               <div className='searchIconContainer'>
                   <img src={searchIcon} />
               </div>
               <input 
                    className='searchInput' 
                    placeholder='Collection, Item or User...' 
                    type="text" 
                    />          
               </div>
            <div className='headerItems'>
                <p>Drops</p>
                <p>Marketplace</p>
                <p>Create!</p>
            </div>
            <div className='headerActions'>
                <div className='themeSwitchContainer'>
                    <img src={themeSwitchIcon} />
                </div>
            </div>

        <div className='loginButton'>
            <p> GET IN!</p>
        </div>

        </div> 
    )
}

export default Header
