import React, { useState } from 'react';
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventIcon from '@mui/icons-material/Event';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { db } from './firebaseCo';
import Post from './Post';
import './Feed.scss';

function Feed() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState('');
  const feedHandler = e => {
    e.preventDefault();
    // db.collection('posts').add({
    //   name: "Mahamud Hasan Rashel",
    //   degisnation: 'Software Engineer',
    //   description: input,
    //   photoUrl: '',
    //   timeStamp: firebase.firestore.FieldValue.serverTimestamp()
    // })
  }

  return (
    <div className='feed'>
      <div className="feed__container">
        <div className="feed__input">
          <CreateIcon />
          <form onSubmit={feedHandler}>
            <input type="text" value={input} onChange={(e)=> setInput(e.target.value)}/>
            <button type='submit'>submit</button>
          </form>
        </div>
        <div className="feed__inputOption">
          <InputOption Icon={ImageIcon} title="Photo" color="" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="" />
          <InputOption Icon={EventIcon} title="Event" color="" />
          <InputOption Icon={CalendarTodayIcon} title="Write Article" color="" />
        </div>
      </div>
      {posts.map(post => (
        <Post name="Mahamud Hasan Rashel" degisnation="Degisnation" description="Description will goes here" />
      ))}
    </div>
  )
}

export default Feed
