import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 
  fav: [],
  isfav:false
}

export const counterSlice = createSlice({
  name: 'datafetch',
  initialState,
  reducers: {
    
    
      favourite: (state, action) => {
        state.fav.push(action.payload)
      },
      setisfav:(state)=>{
        state.isfav=true


      },
      removeFromFavorites: (state, action) => {
        state.fav = state.fav.filter(item => item.id !== action.payload.id)
      },
      setisfavfalse:(state)=>{
        state.isfav=false


      },
  },
})

// Action creators are generated for each case reducer function
export const { favourite,removeFromFavorites,setisfav,setisfavfalse } = counterSlice.actions



export const selectFavorites = state => state.datafetch.fav.meal;

export default counterSlice.reducer;