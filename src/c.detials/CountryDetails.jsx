import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navi from '../navbar/Navi'
import { Card } from 'react-bootstrap'

const CountryDetails = () => {
    const {area}=useParams()
    console.log(area);
    const[data,setData]=useState('')
    useEffect(()=>{
        let fetchData= async()=>{
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
            setData(response.data)
            console.log(response.data);
        }
        fetchData()
    },[area])
    

  return (
    <>
        <Navi/>
        
        <div className='d-flex flex-wrap  justify-content-center align-items-center main1 '>
            {data.meals && data.meals.length >0 ? (
                data.meals.map((meals,index)=>(
                    <Card className='  m-3 ' key={index} style={{ }}>
      <Card.Img className='image-card' variant="top" src={meals.strMealThumb} />
      <Card.Body>
        <Card.Title className='text-center '>{meals.strMeal}</Card.Title>   
           <Link to={`/single/${meals.idMeal}`}> <button>View Detials</button></Link>
       
      </Card.Body>
    </Card>

                ))
            ):
            (
                <p>Data Loading......</p>
            )}
            

      
    </div>
    </>
  )
}

export default CountryDetails
