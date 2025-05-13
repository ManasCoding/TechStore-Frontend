// import React, { useState, useEffect, useContext, useNavigate } from 'react'
import { useEffect, useState} from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from './axios';
import { useParams } from 'react-router-dom'
import Loading from './Loading.jsx'
import { toast } from 'react-toastify';
//  import { ProductContext } from './Context.jsx'
const Details = () => {
  // const [products, setproducts] = useContext(ProductContext);
  const navigate = useNavigate();
  const [products, setProducts] = useState(null);
  const {id} = useParams();
  console.log(id);



  const getsingleproduct = async () => {
    try {
      const {data} = await axios.get(`/products/${id}`);
      setProducts(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }



  useEffect(() => {
      // if (!product) setProducts(product.filter((product) => product.id == id)[0]);
    getsingleproduct();

  }, [])

  // const ProductDeletHandler = products.filter((product) => product.id !== id);
  // setproducts(ProductDeletHandler);
  // localStorage.setItem("products", JSON.stringify(ProductDeletHandler));
  // navigate("/home");

  const ProductDeletHandler = (id) => {
    const filteredProducts = products.filter((product) => product.id !== id);
    setProducts(filteredProducts);
    localStorage.setItem("products", JSON.stringify(filteredProducts));
    toast.success("Product deleted successfully");
    navigate("/home");
  }
  
  return ( products ? (
    <div>
      <Link to = "/home" className='ml-[18%] mt-[5%] absolute'>Home</Link>
      <div className='w-[70%] flex h-full justify-between items-center m-auto p-[10%]'>
        <img src={products.image} alt="" className='w-[40%] h-[80%] object-contain'/>
        <div className='content w-[50%]'>
          <h1 className='text-4xl'>{products.title}</h1>
          <h3 className='text-zinc-400 my-5'>{products.category}</h3>
          <h2 className='text-red-400 mb-3'>{`${products.price} $`}</h2>
          <p className='mb-[5%]'>
            {products.description}
          </p>
          <Link to={`/edit/${products.id}`} className='py-2 px-5 border border-blue-200 text-blue-300 mr-3'>Edit</Link>
          <Link to="/home" onClick={() => ProductDeletHandler(products.id)} className='py-2 px-5 border border-red-200 text-red-300'>Delete</Link>
        </div>
      </div>
    </div> ) : (<Loading />)
  )
}

export default Details