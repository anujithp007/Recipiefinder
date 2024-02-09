import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import { } from "./single.css";
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import CardGroup from 'react-bootstrap/CardGroup';
import Navi from '../navbar/Navi';
import { useDispatch, useSelector } from "react-redux";
import { addFavourite, favourite, removeFromFavorites, setisfav, setisfavfalse } from '../Redux/slice';
import { FaHeart, FaRegHeart } from "react-icons/fa";






const Singlemeal = () => {
    const { id } = useParams()
    const [data, setData] = useState('')
    const myfavourites=useSelector((state)=>state.datafetch.fav)


    const dispatch = useDispatch()
    useEffect(() => {
        let fetchData = async () => {
            let response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            console.log(response.data.meals,'fav');
            setData(response.data.meals[0])
            console.log(response.data);
        }
        fetchData()
    }, [id])
    const isFavorite = myfavourites.find((item) => item.id === data.idMeal);
    

    const addToFav=()=>{
        const newItem={id:data.idMeal,...data}
        dispatch(addFavourite(newItem))
       
    }
    const removeFav=(id)=>{
        dispatch(removeFromFavorites(id))

    }
   console.log(data);
   
   
    return (

        <div>
            <Navi />
                    <div>
                        <CardGroup className='main-single'>
                            <Card className='image-single'>
                                <img src={data.strMealThumb} alt="" />
                            </Card>
                            <Card className='detail-single'>
                                <h2>{data.strMeal} <button  onClick={isFavorite ? ()=>removeFav(data.idMeal) : addToFav}>
                                    {isFavorite ? <FaHeart style={{color:'red'}}/> : <FaRegHeart />}
                               
                                </button>
                                   
                                </h2>
                                <h3>Category : <span>{data.strCategory}</span>  </h3>
                                <h3>Source: <a href={data.strYoutube}>{data.strYoutube}</a></h3>
                                <div className='ing'>
                                    <h2>Ingrediants:</h2>
                                    <MDBContainer>
                                        <MDBRow>

                                           <MDBCol>
                                            <li>{data?.strIngredient1}</li>
                                            <li>{data?.strIngredient2}</li>
                                            <li>{data?.strIngredient3}</li>
                                            <li>{data?.strIngredient4}</li>
                                            <li>{data?.strIngredient5}</li>
                                            <li>{data?.strIngredient6}</li>
                                            <li>{data?.strIngredient7}</li>
                                            <li>{data?.strIngredient8}</li>
                                            <li>{data?.strIngredient9}</li>
                                            <li>{data?.strIngredient10}</li>
                                            <li>{data?.strIngredient11}</li>
                                            <li>{data?.strIngredient12}</li>
                                           </MDBCol>
                                        </MDBRow>
                                    </MDBContainer>

                                </div>
                            </Card>
                        </CardGroup>

                        <div className='instruction'>
                            <p> <h2>How To Cook🍛</h2 >
                                {data.strInstructions}
                            </p>
                        </div>

                    </div>


        </div>
    )
}

export default Singlemeal
