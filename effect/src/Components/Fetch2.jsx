import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios'

function Fetch2() {

  useEffect(() => {
    axios.get('http://localhost:5000/api')
	.then(response => response.json())
	.then(response => {
        console.log(response)

    })
	.catch(err => console.error(err));
  }, []);

  return (
    <div className='container'>
    </div>
  );
}
export default Fetch2;
