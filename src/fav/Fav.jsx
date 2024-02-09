import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import Navi from '../navbar/Navi';
import { Link } from 'react-router-dom';
import img5 from './fotor-ai-2024020901141-removebg-preview.png'
import { removeFav2, removeFromFavorites } from '../Redux/slice';


const Fav = () => {
  
  const result = useSelector((state)=>state.datafetch.fav)
  console.log(result);
 
    const dispatch=useDispatch()
  

let handelremove=(id)=>{
  dispatch(removeFav2(id))
}

  return (
    <>
    <Navi/>
    <div className='d-flex flex-wrap  justify-content-center align-items-center main1 '>
        {result && result.length >0 ? (
          result.map((meals,index)=>(
            <Card className='  m-3 ' key={index} style={{ }}>
                  <button onClick={()=>{handelremove(meals.idMeal)}}>remove</button>
  <Card.Img className='image-card' variant="top" src={meals.strMealThumb} />
  <Card.Body>
    <Card.Title className='text-center '>{meals.strMeal}</Card.Title>   
       <Link to={`/single/${meals.idMeal}`}> <button>View Detials</button></Link>
      
  </Card.Body>
</Card>

            ))
        ):
        (<>
            <p className='error-fav'>There is no dishes....</p>
            <img className='w-25' src={img5}alt="" />
        </>
        )}
        

  
</div>
</>
  )
}

export default Fav
