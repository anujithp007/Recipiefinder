import React from 'react'
import Navi from './navbar/Navi'
import Firstpage from './FirstPage.jsx/Firstpage'
import Detials from './Detials/Detials'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Singlemeal from './Singlemeal/Singlemeal'
import Search from './Search/Search'
import Country from './country/Country'
import CountryDetails from './c.detials/CountryDetails'
import Fav from './fav/Fav'


const App = () => {
  return (
    <div>
     
  <React.StrictMode>
  <BrowserRouter>
<Routes>
  <Route path='/' element={<Firstpage/>}></Route>
  <Route path='/detials/:category' element={<Detials/>}></Route>
  <Route path='/single/:id' element={<Singlemeal/>}></Route>
  <Route path='/search' element={<Search />}></Route>
  <Route path='/country' element={<Country />}></Route>
  <Route path='/countrydt/:area' element={<CountryDetails />}></Route>
  <Route path='/fav' element={<Fav />}></Route>
</Routes>

  </BrowserRouter>
</React.StrictMode>

   
    </div>
  )
}

export default App
