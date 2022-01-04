import React from 'react';
import Avatar from '@mui/material/Avatar';
import MyAvater from './../images/avater.jpg';
import Profile from './../images/profile.jpg';
import './Sidebar.scss';

function Sidebar() {
  const recentItem = (topic) => (
    <div className='sidebar__recentItem'>
      <span className='sidebar__hash'>#</span>
      <p>{ topic }</p>
    </div>
  )
  return (
    <div className='sidebar'>
      <div className="sidebar__top">
        <img src={Profile} alt="" />
        <Avatar src={MyAvater} />
        <h2>Rasel Mahmud</h2>
        <h4>rasel.wp@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed your profile</p>
          <div className="sidebar__stat_num">
            6
          </div>
        </div>
        <div className="sidebar__stat">
          <p>Views of your posts</p>
          <div className="sidebar__stat_num">
            21
          </div>
        </div>
      </div>

      <div className="sidebar__recent">
        <h4>Recent</h4>
        {recentItem('React JS')}
        {recentItem('JavaScript')}
        {recentItem('WordPress')}
        {recentItem('Vue')}
      </div>

    </div>
  )
}

export default Sidebar