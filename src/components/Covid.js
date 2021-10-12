import axios from 'axios';
import React, {useState, useEffect} from 'react';
function Covid() {
   const getUserData = async ()=>{

       const res= await fetch('https://api.github.com/users');
      const data= await res.json();
       console.log(data[0]);
   }
    useEffect(() => {
        
       getUserData();
    }, [])
    return (
        <>
        <h2>Live</h2>
        
        </>
    )
}

export default Covid
