import React,{useEffect, useState} from 'react'
import {} from 'react-router-dom'
import Cards from './Cards';
export default function Home() {
    const [users,setusers]=useState([])
    useEffect(()=>{
        const fetchD=async()=>{
            var res= await fetch("https://jsonplaceholder.typicode.com/users",{
                method : 'get'
            })
            res = await res.json();
            setusers(res);
        }
        fetchD();
    })
   
  return (
    

    <>
       <div className='container'>
       {
        users.map((user,id)=>{
            return(
                <Cards  name={user.name} username={user.username} city={user.address.city} suite={user.address.suite} street={user.address.street} zipcode={user.address.zipcode} email={user.email} phone={user.phone}/>
            )
        })
       }
       </div>
    </>
  )
}
