import React from 'react';
import Logo from './../images/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MyAvater from './../images/avater.jpg'
import Avatar from '@mui/material/Avatar';
import HeaderOption from './HeaderOption';
import './Header.scss';

const Header = () => {
  return(
    <>
      <div className="header">
        <div className="header__left">
          <img src={Logo} alt="" />
          <div className="header__search">
            <SearchIcon />
            <input type="text" />
          </div>
        </div>

        <div className="header__right">
          <HeaderOption title="Home" Icon={HomeIcon} />
          <HeaderOption title="My Network" Icon={SupervisorAccountIcon} />
          <HeaderOption title="Job" Icon={BusinessCenterIcon} />
          <HeaderOption title="Messeging" Icon={ChatIcon} />
          <HeaderOption title="Notifications" Icon={NotificationsActiveIcon} />
          <HeaderOption title="Me" Avater={Avatar} image={MyAvater} />
        </div>
      </div>
    </>
  )
}

export default Header;