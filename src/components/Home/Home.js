import React, { useEffect, useState } from 'react';
import Friends from '../Friends/Friends';

const Home = () => {
   const [friends,setFriends] = useState([]);
    useEffect(()=>{
      const url = "https://jsonplaceholder.typicode.com/users";
      fetch(url)
      .then(res => res.json())
      .then(data => setFriends(data))

    },[])
  return (

    <div>
      <h2>Count : {friends.length}</h2>
      {
        friends.map(friend => <Friends friend={friend}></Friends>)
      }
    </div>
  );
};

export default Home;