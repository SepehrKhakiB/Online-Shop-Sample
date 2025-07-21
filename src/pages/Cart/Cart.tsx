
import Button from "../../component/button/Button"
import CartItem from "../../component/cartItem/CartItem"
import Container from "../../component/container/Container"
import {  useShoppingCartContext } from "../../context/ShoppingCartContext"
 



function Cart() {
  
  const {cartItems} =useShoppingCartContext()
  
  return (
    <div>
      <Container>
        <div>
           
          {
            cartItems.map(item=><CartItem {...item}/>)
          }

        </div>
        <div className="bg-gray-50 shadow mt-8">
          <p className="text-right">قیمت کالا :2000</p>
          <p className="text-right">تخفیف شما:200</p>
          <p className="text-right">قیمت نهایی:800</p>
          <Button className="p-2 mb-2" variant="success">ثبت سفارش</Button>
        </div>
      </Container>
    </div>
    
  )
}

export default Cart