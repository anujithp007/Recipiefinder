import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import Navi from '../navbar/Navi'
import './country.css'
import { Link } from 'react-router-dom'

const Country = () => {
    const[data,setData]=useState([])
    useEffect(()=>{
        let fetchData=async()=>{
            let response=await axios.get(`/api/json/v1/1/list.php?a=list`)
            setData(response.data)
            console.log(response.data);
        }
        fetchData()
    },[])
  return (
   <>
   <Navi/>
   <h1>Country</h1>
    <div className='d-flex flex-wrap justify-content-center align-items-center  main-country gap-3 '>
        
     {data.meals && data.meals.length > 0 ? (
  data.meals.map((items, index) => (
    <Link  style={{textDecoration:"none"}} to={`/countrydt/${items.strArea}`}><Card key={index}>
      <Card.Title style={{textDecoration:"none"}}>{items.strArea}</Card.Title>
      
      {/* Add other Card components, such as Card.Body, Card.Text, etc., if needed */}
    </Card></Link>
  ))
) : (
  <div className='loading-spinner'></div>
)}


     
    </div></>
  )
}

export default Country
