import type { IProduct } from "../../types/server"

type TProductItem = IProduct

function Productitem({ title, price, description, image }: TProductItem) {
  return (
    <div className=" shadow-md rounded">
      <img className=" rounded w-full h-full object-contain" src={image} />
      <div className="flex justify-between text-left text-gray-700 ">

        <h1 className="clamp-1 font-bold w-52">{title}</h1>
        <span className="clamp-1 font-bold w-52">{price}$</span>
      </div>
      <div className="pt-2 p-4">
        <p className="line-clamp-2 ">
          {description}
        </p>
      </div>
    </div>
  )
}

export default Productitem