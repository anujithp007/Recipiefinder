import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 
  fav: [],

}

export const counterSlice = createSlice({
  name: 'datafetch',
  initialState,
  reducers: {
    
    
      addFavourite: (state, action) => {
        const NewItem=action.payload

        const isDuplicate=state.fav.find((item)=>item.id===NewItem.id)
        if(!isDuplicate){
          state.fav.push(NewItem)
        }
      },
      removeFromFavorites: (state, action) => {
        const remove = action.payload;
        state.fav = state.fav.filter((item)=>item.id !== remove)
      },
     

      },
  },
)

// Action creators are generated for each case reducer function
export const { addFavourite,removeFromFavorites} = counterSlice.actions



export const selectFavorites = state => state.datafetch.fav.meal;

export default counterSlice.reducer;