import React, { useEffect, useState } from 'react';
import axios from 'axios';

const JobsList = () => {
  const data =
  fetch("http://localhost:5000/api/jobs")
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
    .catch(err => console.error(err));

  return (
    <div>
      {
        data.map(data => {
          <p>
            {data.title}
          </p>
        })
      }
    </div>)

}
export default JobsList;
