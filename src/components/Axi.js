import axios from 'axios';
import React, {useState, useEffect} from 'react';
function Axi() {
    const [user, setUser] = useState([]);
   const getUserData =()=>{
    axios.get('https://api.github.com/users').then((res)=>{
        // const actualData=res.json()
        console.log(res.data);
        setUser(res.data);
        
    })
   }
    useEffect(() => {
        
       getUserData();
    }, [])
    return (
        <>
     {user.map((post)=>{
         return(
          <div>
              <h2>{post.login}</h2>
          </div>
         );
     })
     }
        
        
        </>
    )
}

export default Axi;
