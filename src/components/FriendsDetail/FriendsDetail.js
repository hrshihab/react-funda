import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';

const FriendsDetail = () => {
  const {friendId} =useParams();
  const [friend,setFriend]=useState({});
  useEffect(()=>{
    const url=`https://jsonplaceholder.typicode.com/users/${friendId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setFriend(data))
  },[])

  
  return (
    <div>
      <h1>Friends Details : {friendId}</h1>
      <p>Name : <strong>{friend.name}</strong></p>
      <p>Email : {friend.email}</p>
      <p>Phone : {friend.phone}</p>
      
    </div>
  );
};

export default FriendsDetail;