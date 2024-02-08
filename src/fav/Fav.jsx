import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import Navi from '../navbar/Navi';
import { Link } from 'react-router-dom';
import img5 from './fotor-ai-2024020901141-removebg-preview.png'
import { removeFromFavorites } from '../Redux/slice';


const Fav = () => {
  const result = useSelector((state)=>state.datafetch.fav)
  console.log(result);
 
    const dispatch=useDispatch()
    const handleremove=(id)=>{
      dispatch(removeFromFavorites(id))
    }
  return (
    <>
    <Navi/>
    <div className='d-flex flex-wrap  justify-content-center align-items-center main1 '>
        {result && result.length >0 ? (
            result.map((meals,index)=>(
                <Card className='  m-3 ' key={index} style={{ }}>
  <Card.Img className='image-card' variant="top" src={meals.strMealThumb} />
  <Card.Body>
    <Card.Title className='text-center '>{meals.strMeal}</Card.Title>   
       <Link to={`/single/${meals.idMeal}`}> <button>View Detials</button></Link>
       {/* <button onClick={handleremove(meals.idMeal)}>remove</button> */}
      
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
