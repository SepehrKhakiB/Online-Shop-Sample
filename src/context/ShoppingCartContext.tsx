import { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage/useLocalStorage";
import { login } from "../services/api";


interface IShoppingCartProvider {
    children: React.ReactNode;
}

interface CartItem {
    id: number;
    qty: number;
}

interface IShoppingCartContext {
    cartItems: CartItem[];
    handleIncreaseProductQty: (id: number) => void;
    handleDecreaseProductQty: (id: number) => void;
    getProductQty: (id: number) => number;
    handleRemoveProduct: (id: number) => void;
    cartQty :number;
    isLogin :boolean;
    handleLogin :()=>void;
    handleLogOut :()=>void;


    

}

export const ShoppingCartContext = createContext({} as IShoppingCartContext);

export const useShoppingCartContext = () => {
    return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: IShoppingCartProvider) {
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("cartItems",[]);

    const handleIncreaseProductQty = (id: number) => {
        setCartItems((currentItems) => {
            let selectedItems = currentItems.find(item => item.id == id);
            if (selectedItems == null) {
                return [...currentItems, { id: id, qty: 1 }];
            }
            else {
                return currentItems.map(item => {
                    if (item.id === id) {
                        return { ...item, qty: item.qty + 1 };
                    }
                    else {
                        return item;
                    }
                });
            }
        });
    };

    const handleDecreaseProductQty = (id: number) => {
        setCartItems((currentItems) => {
            let selectedItems = currentItems.find(item => item.id == id);
            if (selectedItems?.qty === 1) {
                return currentItems.filter((item) => item.id !== id);
            }
            else {
                return currentItems.map(item => {
                    if (item.id == id) {
                        return { ...item, qty: item.qty - 1 };
                    }
                    else {
                        return item;
                    }
                });
            }
        });
    };

    const getProductQty = (id: number) => {

        return cartItems.find(items => { items.id == id })?.qty || 0
    };

    const handleRemoveProduct = (id: number) => {
        setCartItems((currentItems) => currentItems.filter(item => item.id != id));

        
    };


    const cartQty = cartItems.reduce((totalQty,items)=>totalQty+items.qty,0);
    const [isLogin,setIsLogin] =useState(false);

    const handleLogin = ()=>{
        login("sepehr","7449").then(()=>{
            setIsLogin(true);
        })
    };
    const handleLogOut = ()=>{
        setIsLogin(false);
    }




    return (
        <ShoppingCartContext.Provider
            value={{
                cartItems,
                handleIncreaseProductQty,
                handleDecreaseProductQty,
                getProductQty,
                handleRemoveProduct,
                cartQty,
                isLogin,
                handleLogin,
                handleLogOut

            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    );
}