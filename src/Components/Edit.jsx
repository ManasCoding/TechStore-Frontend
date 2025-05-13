import React, { useEffect } from 'react'
import { useState, useContext } from 'react'
import { ProductContext } from './Context';
// import { nanoid } from 'nanoid';
import { useNavigate, useParams } from 'react-router-dom';
const Edit = () => {
    const [products, setproducts] = useContext(ProductContext);
    const navigate = useNavigate();
    const {id} = useParams();
    const [product, setProduct] = useState({
        title: "",
        category: "",
        price: "",
        description: "",
        image: "",
    });

    // const changeHandler = (e) => {
    //     setProduct({ ...product, [e.target.name]: e.target.value });
    // };
    

    useEffect(() => {
        setProduct(products.filter((product) => product.id == id)[0]);
    }, [])



    const AddProductHandler = (e) => {
        e.preventDefault();

        if (
            product.title.trim().length < 5 || 
            product.category.trim().length < 5 ||
            product.price.trim().length < 1 || 
            product.description.trim().length < 5 || 
            product.image.trim().length < 5
        ) {
            alert("All fields are required")
            return;
        };

        // const product = {id: nanoid(), image, title, category, price, description};
        // console.log(product);

        const pi = products.findIndex((p) => p.id == id)[0];
        console.log(pi, product);

        const copyProducts = [...products];
        copyProducts[pi] = {...Products[pi], ...product};
        setproducts(copyProducts);
        localStorage.setItem("products", JSON.stringify(copyProducts));
        navigate("/home");
    }





  return (
    <div className='w-full h-screen'>
        {/* <div><Page /></div> */}
        <form onSubmit={AddProductHandler} className='flex flex-col justify-center items-center p-[5%] w-screen h-screen'>
            <h1 className='text-2xl text-red-600 mb-5 w-1/2'>Edit product</h1>
            <input type="url" placeholder='image url' className='w-1/2 rounded border-zinc-400 p-3 mb-5 bg-zinc-200' onChange={(e) => {
                console.log(e.target.value);
                name = "image";
                // onChange={(e) => changeHandler()};
                // value = {product && product.image}
            }}/>
            <input type="text" placeholder='title' className='w-1/2 rounded border-zinc-400 p-3 mb-5 bg-zinc-200' onChange={(e) => {
                console.log(e.target.value);
                name = "title";
                // onChange={changeHandler()};
                // value = {product && product.title}
            }}/>
            <input type="text" placeholder='category' className='w-1/2 rounded border-zinc-400 p-3 mb-5 bg-zinc-200' onChange={(e) => {
                console.log(e.target.value);
                name = "category";
                // onChange={changeHandler()};
                // value = {product && product.category}
            }}/>
            <input type="number" placeholder='price' className='w-1/2 rounded border-zinc-400 p-3 mb-5 bg-zinc-200' onChange={(e) => {
                console.log(e.target.value);
                name = "price";
                // onChange={changeHandler()};
                // value = {product && product.price}
            }}/>
            <textarea type="text" placeholder='description' className='w-1/2 rounded border-zinc-400 p-3 mb-5 bg-zinc-200' onChange={(e) => {
                console.log(e.target.value);
                name = "description";
                // onChange={changeHandler()};
                // value = {product && product.description}
            }}></textarea>
            <div><button type='submit'>Add Product</button></div>
        </form>
    </div>
  )
}

export default Edit