import React from 'react'
import "./Sidebar.css"
import { Avatar } from '@mui/material'


function Sidebar() {

  const recentItem = (topic) => (
    <div className='sidebar__recentItem'>
      <span className='sidebar__hash'></span>
      <p>#{topic}</p>
    </div>
  )
  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <img src='https://images.pexels.com/photos/965345/pexels-photo-965345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='chip.img'/>
        <Avatar className='sidebar__avatar'/>
        <div className='nameOfUser'>Zara Khurram</div>
        <div className='usertitle'>Technical Product Manager </div>
      </div>
      <div className='sidebar__stats'>
        <div className='sidebar__stat'>
            <div className='content'>Who viewed you</div>
            <div className='sidebar__statNumber'>2543</div>
        </div>
        <div className='sidebar__stat'>
            <div className='content'>Views on post</div>
            <div className='sidebar__statNumber'>2448</div>
        </div>
      </div>

      <div className='sidebar__bottom'>
        <div className='recent'>Recent</div>
        {recentItem ('reactjs')}
        {recentItem ('programming')}
        {recentItem ('software')}
        {recentItem ('design')}
        {recentItem ('developer')}
      </div>
    </div>
  )
}

export default Sidebar
