import { useState } from "react";
import { createContext } from "react";
import axios from "./axios";
import { useEffect } from "react";


export const ProductContext = createContext();
export const CartContext = createContext();
export const WishContext = createContext();

const Context = (props) => {
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem("products")) || null);
    const [wish, setWish] = useState([]);
    const [item, setItem] = useState([]);
    

    const getProducts = async () => {
        try {
            const { data } = await axios("/products");
            setProducts(data);
            // console.log(Array.isArray(data));
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProducts();
    }, [])


    return (
        <div>
            <ProductContext.Provider value={[products, setProducts]}>
                <WishContext.Provider value={[wish, setWish]}>
                    <CartContext.Provider value={{item, setItem}}>
                        {props.children}
                    </CartContext.Provider>
                </WishContext.Provider>
            </ProductContext.Provider>
        </div>
    );
};

export default Context;