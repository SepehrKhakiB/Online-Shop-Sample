import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Store from "./pages/Store/Store"

import Layout from "./layout/Layout"
import ProductPage from "./pages/product/ProductPage"
import Cart from "./pages/Cart/Cart"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import PrivateRoute from "./component/privateRoute/PrivateRoute"
import Login from "./pages/login/Login"





function App() {


  return (
    <>
      <ShoppingCartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/product/:id" element={<ProductPage />} />
            
            <Route element={<PrivateRoute/>}>
                   <Route path="/cart" element={<Cart />} />
            </Route>
            <Route path="/login" element={<Login/>}/>
          </Routes>

        </Layout>
      </ShoppingCartProvider>

    </>
  )
}

export default App


//  ShoppingCartProvider