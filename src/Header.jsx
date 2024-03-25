import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption.jsx';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <div className='header'>
      
      <div className='header__left'>
        <img src='https://cdn-icons-png.flaticon.com/256/174/174857.png' 
        alt='linkedIn Icon'/>

        <div className="header__search">
            <SearchIcon />
            <input placeholder='Search'type='text'/>
        </div>
      </div>

    

      <div className='header__right'>
        <HeaderOption Icon={HomeIcon} title="Home"/>
        <HeaderOption Icon={SupervisorAccountIcon} title="Network"/>
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
        <HeaderOption Icon={ChatIcon} title="Messaging"/>
        <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
        <HeaderOption avatar="https://media.licdn.com/dms/image/C5603AQHL4G0VKTUe5g/profile-displayphoto-shrink_800_800/0/1647117789800?e=1716422400&v=beta&t=IIR3nz2zQVi49oL9Llg1p0Yv0Pt3l8lraz-MxPRCYz8" title='me' />
      
      </div>


    </div>
  );
}

export default Header;
