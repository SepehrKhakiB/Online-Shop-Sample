import { Link } from "react-router-dom"
import Container from "../container/Container"
import { useShoppingCartContext } from "../../context/ShoppingCartContext"
import Button from "../button/Button"




function Navbar() {
   
   const{cartQty,handleLogOut}=useShoppingCartContext()
   
   
    return (
        <div className="h-8 border-b shadow">
            <Container>
                <div className=" flex justify-between flex-row-reverse items-center">

                    <ul className="flex flex-row-reverse">
                        <li className="ml-4"><Link to="/">خانه</Link></li>
                        <li className="ml-4"><Link to="/store">محصولات</Link></li>
                    </ul>
                    <div>
                        <Button onClick={handleLogOut}>Logout</Button>
                        <Link to={"/cart"}>
                            <button>سبد خرید</button>
                            <span>{cartQty !== 0 ?cartQty :"" }</span>
                            

                        </Link>

                    </div>
                </div>



            </Container>


        </div>


    )
}

export default Navbar