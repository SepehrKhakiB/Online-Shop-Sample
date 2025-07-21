
import Button from "../button/Button"
import { useEffect, useState } from "react";
import { getSingleProduct } from "../../services/api";
import type { IProduct } from "../../types/server";
import {useShoppingCartContext } from "../../context/ShoppingCartContext";
import { Link } from "react-router-dom";

interface ICartItems { 
    id : number;
    qty : number; 
}


function CartItem({id,qty}:ICartItems) {
      
    const {handleIncreaseProductQty,handleDecreaseProductQty,handleRemoveProduct} =useShoppingCartContext()
    
    
    const [product, setProduct] = useState<IProduct>();


    useEffect(() => {
        getSingleProduct(id).then((data) => {
          setProduct(data)
        })
      }, [])
    
    
    
    
    
    return (
        <div>
            <div className="flex flex-row-reverse mt-4 bg-gray-50  rounded  shadow ">
                
                <Link to={`/product/${id}`}>
                <img className="w-20 rounded " src={product?.image} alt="تصویر محصول" />
                </Link>
                
                <div>
                    <h3 className="pr-2.5">{product?.title}</h3>
                    <Button onClick={()=>handleIncreaseProductQty(id)} className="p-2 " variant="primary">+</Button>
                    <span className="mx-2">{qty}</span>
                    <Button onClick={()=>{handleDecreaseProductQty(id)}} variant="primary" className="p-2">-</Button>
                    <Button onClick={()=>{handleRemoveProduct(id)}} variant="danger" className="mx-3 p-1.6 hover:bg-red-50 hover:text-red-600">remove</Button>
                </div>
            </div>

        </div>
    )
}

export default CartItem