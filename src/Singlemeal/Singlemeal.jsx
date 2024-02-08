import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import { } from "./single.css";
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import CardGroup from 'react-bootstrap/CardGroup';
import Navi from '../navbar/Navi';
import { useDispatch, useSelector } from "react-redux";
import { favourite, removeFromFavorites, setisfav, setisfavfalse } from '../Redux/slice';






const Singlemeal = () => {
    const { id } = useParams()
    const [data, setData] = useState('')
    const isfav = useSelector((state)=>state.datafetch.isfav);
    console.log(isfav);

    const dispatch = useDispatch()
    useEffect(() => {
        let fetchData = async () => {
            let response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            console.log(response);
            setData(response.data.meals[0])
            // console.log(response.data);
        }
        fetchData()


    }, [])
   console.log(data);
        const removeFavorites=(data)=>{
            dispatch(removeFromFavorites(data))
            dispatch(setisfavfalse())
        }
        const handleAddFav=()=>{
            dispatch(favourite(data))
            dispatch(setisfav())
            
        }
        const handleRemoveFav=()=>{
            removeFavorites(data)
        }

   
    return (

        <div>
            <Navi />
                    <div>
                        <CardGroup className='main-single'>
                            <Card className='image-single'>
                                <img src={data.strMealThumb} alt="" />
                            </Card>
                            <Card className='detail-single'>
                                <h2>{data.strMeal}
                                {isfav ?
                                 (<svg onClick={()=>handleRemoveFav(data)} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
</svg>):
                                ( <svg onClick={()=>handleAddFav() } xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                    </svg>)}
                                   
                                </h2>
                                <h3>Category : <span>{data.strCategory}</span>  </h3>
                                <h3>Source: <a href={data.strYoutube}>{data.strYoutube}</a></h3>
                                <div className='ing'>
                                    <h2>Ingrediants:</h2>
                                    <MDBContainer>
                                        <MDBRow>

                                            <MDBCol size='md'>
                                                <li>{data.strIngredient1}</li>
                                            </MDBCol>
                                            <MDBCol size='md'>
                                                <li>{data.strIngredient2}</li>
                                            </MDBCol>
                                            <MDBCol size='md'>
                                                <li>{data.strIngredient3}</li>
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBRow>
                                            <MDBCol size='md'>
                                                <li>{data.strIngredient4}</li>
                                            </MDBCol>
                                            <MDBCol size='md'>
                                                <li>{data.strIngredient5}</li>
                                            </MDBCol>
                                            <MDBCol size='md'>
                                                <li>{data.strIngredient6}</li>
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBRow>
                                            <MDBCol size='md'>
                                                <li>{data.strIngredient7}</li>
                                            </MDBCol>
                                            <MDBCol size='md'>
                                                <li>{data.strIngredient8}</li>
                                            </MDBCol>
                                            <MDBCol size='md'>
                                                <li>{data.strIngredient9}</li>
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBRow>
                                            <MDBCol size='md'>
                                                <li>{data.strIngredient10}</li>
                                            </MDBCol>
                                            <MDBCol size='md'>
                                                <li>{data.strIngredient11}</li>
                                            </MDBCol>
                                            <MDBCol size='md'>
                                                <li>{data.strIngredient12}</li>
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
