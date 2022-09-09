import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friends = (props) => {
  const friend = props.friend;
  const {name,email,phone,id} = friend;
  const friendStyle= {
    
    border:"2px purple solid",
    padding:"5px",
    marginBottom:"10px",
    borderRadius:"30px",
    
  }
const navigate = useNavigate();
const handleNavigate = (friendId) =>
{
  const url = `/friend/${friendId}`
  navigate(url);

}
  return (
    <div style={friendStyle}>
      <h3>Name : {name}</h3>
      <h5>Email:{email}</h5>
      <h4>Phone : {phone}</h4>
      <Link to={`/friend/${id}`}>
         <h4>ID : {id}</h4>
      </Link>
      <button onClick={()=>handleNavigate(id)}>
        click me details
      </button>
      
    </div>
  );
};

export default Friends;