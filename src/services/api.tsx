import axios from "axios";


 const client = axios.create({
    baseURL: "http://localhost:7001/"
 })


 export async function getProduct() {
    const {data} = await client("/products")
    return data;
 }

 export async function getSingleProduct(id:number | string) {
    const{data} = await client(`/products/${id}`)
    return data ;
 };

 export async function login(userName:string,password:string) {
    const{data} = await client({
      method : "POST",
      url : "login",
      data:{
         userName,password
      }
     
    })
    return data ;
 }