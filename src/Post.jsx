import React from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import InputOption from './InputOption';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareIcon from '@mui/icons-material/Share';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';


function Post({name, description, message, photoUrl}) {
  return (
    <div className='post'>
        <div className='post__header'>
            <Avatar />
            <div className='post__info'>
                <div className='userName'>{name}</div>
                <div className='description'>{description}</div>
            </div>
        </div>
      <div className='post__body'>
        Message goes here
      </div>
      <div className='post__buttons'>
        <InputOption Icon={ThumbUpOutlinedIcon} title="Like" color="gray"/>
        <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray"/>
        <InputOption Icon={ShareIcon} title="Share" color="gray"/>
        <InputOption Icon={SendOutlinedIcon} title="Send" color="gray"/>
      </div>
    </div>
  )
}

export default Post
