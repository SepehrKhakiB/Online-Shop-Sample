import type { ComponentProps } from "react"


type Variant = "primary" | "seconder" | "danger" | "warning" | "success"
type Button = ComponentProps<"button"> & {
    variant?: Variant
}




function Button({ children, variant,style,...rest }: Button) {

    
    
        
    return (
        <button {...rest} style={{ borderRadius:5,...style,...checkVariant(variant)}}>{children}</button>
    )
}


function checkVariant (variant? : Variant){
   if(variant==="primary"){
    return {backgroundColor: "#55a7fa" , color: "white"}
   }
   else if(variant==="seconder"){
    return {backgroundColor: "gray" , color: "black"}
   }
   else if(variant==="danger"){
    return {backgroundColor: "#f63131" , color: "white"}
   }
   else if(variant==="warning"){
    return {backgroundColor: "yellow" , color: "white"}
   }
   else if(variant==="success"){
    return {backgroundColor: "green" , color: "white"}
   }
}
    

export default Button