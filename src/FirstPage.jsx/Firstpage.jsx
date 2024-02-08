import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import './fp.css'
import { Link } from 'react-router-dom';
import Navi from '../navbar/Navi';

const Firstpage = () => {
    const [data,setData]=useState([])
    
    const [isLoading, setIsLoading] = useState(true);
   
    useEffect(()=>{
        const fetchData= async()=>{
            try {
                const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
                setData(response.data);
                console.log(response.data); 
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            }
        };
        fetchData()
    },[])

   
  return (
    <>
    <Navi/>
    <div className='main'>

    <h1 className='text-center pt-2 '>Categories</h1>
    <Link to={'/search'}><button >Search Here</button></Link>
   
    <div className='d-flex flex-wrap align-items-center justify-content-center mt-3  '>
      {data.categories && data.categories.length > 0 ? (
          data.categories.map((categories, index) => (
             <Link to={`/detials/${categories.strCategory}`}> <Card  className='  m-3 ' key={index} style={{ width: '18rem' }}>
      <Card.Img className='image-card' variant="top" src={categories.strCategoryThumb} />
      <Card.Body>
        <Card.Title className='text-center '>{categories.strCategory}</Card.Title>   
       
      </Card.Body>
    </Card> </Link>
  ))
  ) : (
      <p>Data loading......</p>
      )}
    </div>
      </div>
    </>
  )
}

export default Firstpage
