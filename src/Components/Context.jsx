import { useState } from "react";
import { createContext } from "react";
import axios from "./axios";
import { useEffect } from "react";


export const ProductContext = createContext();
const Context = (props) => {
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem("products")) || null);

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
                {props.children}
            </ProductContext.Provider>
        </div>
    );
};

export default Context;