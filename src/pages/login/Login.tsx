import Button from "../../component/button/Button"
import { useShoppingCartContext } from "../../context/ShoppingCartContext"

function Login() {
 
   const{handleLogin}=useShoppingCartContext()
 
    return (
    <div>
       <input type="text" placeholder="username"/>
       <input type="password" placeholder="password"/>
       <Button onClick={handleLogin}>Login</Button>

    </div>
  )
}

export default Login