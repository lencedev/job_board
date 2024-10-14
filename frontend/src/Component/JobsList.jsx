import React, { useEffect, useState } from 'react';
import axios from 'axios';


const JobsList = () => {

  const [blog, setBlogs] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/jobs")
      .then(res => {
        return res.json()
      })
      .then(data => {
        console.log(data);
      })
  }, []);

  return (
    <div className='home'>
      <p>test</p>
    </div>
  )

}

export default JobsList;
