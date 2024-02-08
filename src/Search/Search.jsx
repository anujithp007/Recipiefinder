import axios from 'axios'
import { Button, Card, Form } from 'react-bootstrap'
import './search.css'

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navi from '../navbar/Navi'


const Search = () => {
  const [data, setData] = useState([])
  const [title, setTitle] = useState('')
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      let response;

      if (searched) {
        response = await axios.get(`/api/json/v1/1/search.php?s=${title}`);
      } else {
        response = await axios.get(`/api/json/v1/1/search.php?f=c`);
      }

      setData(response.data);
    };

    fetchData();
  }, [title, searched]);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = () => {
    setSearched(true);
  };
  return (
    <div>
      <Navi />
      <Form className="search-form ">
        <Form.Control
          onChange={handleChange}
          type="search"
          placeholder="Search your dish"
          className="me-2 nav-search"
          aria-label="Search"

        />
        <Button onClick={handleSubmit} className='search-button' variant="outline-success">Search</Button>
      </Form> <div className='d-flex flex-wrap '>
        {data.meals && data.meals.length > 0 ? (
          data.meals.map((meals, index) => (
            <Link to={`/single/${meals.idMeal}`}> <Card className='  m-3  ' key={index} style={{ width: '18rem' }}>
              <Card.Img className='image-card' variant="top" src={meals.strMealThumb} />
              <Card.Body>
                <Card.Title className='text-center '>{meals.strMeal}</Card.Title>

              </Card.Body>
            </Card> </Link>
          ))
        ) : (
          <div></div>
        )} </div>


    </div>
  )
}

export default Search
