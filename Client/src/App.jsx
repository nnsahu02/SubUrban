
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/NavBar'
import SignIn from './components/SignIn/SignIn'
import SignUp from './components/SignUp/SignUp'
import Products from './components/ProductsPage/Products'
import Item from './components/Item/Item'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<SignIn />}></Route>
          <Route path='/signin' element={<SignIn />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/products/product' element={<Item />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
