import React from 'react';
import Avater from '@mui/material/Avatar';
import InputOption from './InputOption';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import './Post.scss';

function Post({name, degisnation, description}) {
  return (
    <div className='post'>
      <div className="post__header">
        <Avater />
        <div className="post__header__info">
          <h3>{ name }</h3>
          <p>{ degisnation }</p>
        </div>
      </div>
      <div className="post__body">
        <p>{ description }</p>
      </div>
      <div className="post__bottom">
        <InputOption Icon={ThumbUpAltIcon} title="Like" />
        <InputOption Icon={CommentIcon} title="Comment" />
        <InputOption Icon={ShareIcon} title="Share" />
        <InputOption Icon={SendIcon} title="Send" />
      </div>
    </div>
  )
}

export default Post
