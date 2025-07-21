
import { useEffect, useState } from "react"
import Button from "../../component/button/Button"
import Container from "../../component/container/Container"
import { useParams } from "react-router-dom"
import { getSingleProduct } from "../../services/api"
import type { IProduct } from "../../types/server"
import { useShoppingCartContext } from "../../context/ShoppingCartContext"





function ProductPage() {

  const params = useParams<{ id: string }>()
  const [product, setProduct] = useState<IProduct>();
  const { handleIncreaseProductQty, getProductQty, handleDecreaseProductQty ,handleRemoveProduct} = useShoppingCartContext()


  useEffect(() => {
    getSingleProduct(params.id as string).then((result) => {
      setProduct(result)
    })
  }, [])


  return (
    <div>
      <Container>
        <div className=" h-96 mt-5 grid grid-cols-12  shadow hover:shadow-2xs ">

          <div className=" col-span-10 text-right pr-4">
            <h1 className="pt-">{product?.title}</h1>
            <p >{product?.price}</p>

            <p className=" line-clamp-2 ">{product?.description}</p>

          </div>
          <div className=" col-span-2 rounded bg-blue-200 h-96">
            <img className="rounded w-full h-full object-contain" src={product?.image} alt="product" />
           

            {getProductQty(parseInt(params.id as string)) === 0 ?
              <Button className="mt-3 w-full p-2 justify-center py-3 " style={{}} variant="success" onClick={() => {
                 console.log(params.id);
                 
                 
                 
                handleIncreaseProductQty(parseInt(params.id as string));
                alert("به سبد خرید اضافه شد")
              }}>افزودن به سبد خرید</Button>
              :
              <>
              <div>
                <Button className="mt-3 w-full p-2 justify-center py-3 " style={{}} variant="success" onClick={() => {

                  handleIncreaseProductQty(parseInt(params.id as string));

                }}>افزودن به سبد خرید</Button>

                <span>{getProductQty(parseInt(params.id as string))}</span>
                <Button onClick={() => {
                 
                 handleDecreaseProductQty(parseInt(params.id as string));
                  alert("از سبد خرید حذف شد!!")
                }} className="mt-3 w-full p-2 justify-chanenter py-3 " variant="primary">
                  حذف محصول</Button>


              </div>
              <Button variant="danger" className="mt-3 w-full p-2 justify-center py-3 "  onClick={()=>{
                handleRemoveProduct(parseInt(params.id as string));
              }}>
                حذف
              </Button>
              </>




            }




            <div className="text-right pt-2 pr-2 ">




            </div>


          </div>


          <div>

          </div>

        </div>

      </Container>
    </div>
  )
}

export default ProductPage




