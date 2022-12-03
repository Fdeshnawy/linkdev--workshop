import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";

function Try() { 
  const [user, setUser] = useState([]);

  const fetchData = () => {
    return fetch("https://api.npoint.io/fee177346e7875554413")
          .then((response) => response.json())
          .then((data) => setUser(data.slides));
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    <main>
      <h1>User List</h1>
      <ul>
      <Carousel>
    
     
    {user.map(review => (
      <Carousel.Item key={review.id}>
        <p className="">{review.category}</p>
        <h3>{review.brief}</h3>
      </Carousel.Item>
    ))}
  </Carousel>
       
      </ul>
    </main>
  );
}

export default Try;