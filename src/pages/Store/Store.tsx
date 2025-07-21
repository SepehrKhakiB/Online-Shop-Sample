import { Link } from "react-router-dom"
import Container from "../../component/container/Container"
import Productitem from "../../component/productitem/ProductItem"
import { useEffect, useState } from "react"
import { getProduct } from "../../services/api"
import type { IProduct } from "../../types/server"




function Store() {
  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    getProduct().then(
      (result) => {
      setProducts(result)
    }
    );
   }, []);
  
  return (
    <div>
      <Container>
        <h1 className="text-right mt-5 mr-5">جدید ترین محصولات</h1>
        <div className="grid grid-cols-4 gap-4 mt-4">
          {
            products.map(
              (item)=>(
                <Link key={item.id} to={`/product/${item.id}`}>
                <Productitem {...item} />
              </Link>
              )
            )
          }


        </div>

      </Container>
    </div>
  )
}

export default Store