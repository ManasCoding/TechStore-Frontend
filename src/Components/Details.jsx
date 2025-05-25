// import React, { useState, useEffect, useContext, useNavigate } from 'react'
import { useEffect, useState} from 'react';
import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
import axios from './axios';
import { useParams } from 'react-router-dom'
import Loading from './Loading.jsx'
import { useContext } from 'react'
import { CartContext } from './Context.jsx'
import { WishContext } from './Context.jsx'
import NavBar from './Navbar.jsx';
import { GiSelfLove } from "react-icons/gi";
import { GiRoyalLove } from "react-icons/gi";
import { toast } from 'react-toastify';
//  import { ProductContext } from './Context.jsx'
const Details = () => {
  // const [products, setproducts] = useContext(ProductContext);
  // const navigate = useNavigate();
  const cart = useContext(CartContext);
  console.log("cart", cart)
  const wishlist = useContext(WishContext);
  console.log("wishlist", wishlist)
  const [products, setProducts] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);
  const [addedToWishlist, setAddedToWishlist] = useState(false);
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

  const handleWishList = () => {
    console.log("wishlist", wishlist)
    wishlist.setWish([
      ...wishlist.wish,
      {
        image: products.image,
        title: products.title,
        price: products.price,
        category: products.category,
      },
    ]);
    setAddedToWishlist(true);
  }

  const handleAddToCart = () => {
    console.log("cart", cart)
    cart.setItem([
      ...cart.item,
      {
        image: products.image,
        title: products.title,
        price: products.price,
        category: products.category,
      },
    ]);
    setAddedToCart(true);
    toast.success("Product added to cart successfully");
  };

  useEffect(() => {
      // if (!product) setProducts(product.filter((product) => product.id == id)[0]);
    getsingleproduct();

  }, [id])

  // const ProductDeletHandler = products.filter((product) => product.id !== id);
  // setproducts(ProductDeletHandler);
  // localStorage.setItem("products", JSON.stringify(ProductDeletHandler));
  // navigate("/home");

  // const ProductDeletHandler = (id) => {
  //   const filteredProducts = products.filter((product) => product.id !== id);
  //   setProducts(filteredProducts);
  //   localStorage.setItem("products", JSON.stringify(filteredProducts));
  //   toast.success("Product deleted successfully");
  //   navigate("/home");
  // }
  
  return ( products ? (
    <div>
      <NavBar />
      <div className='w-[70%] flex h-full justify-between items-center m-auto p-[10%]'>
        <img src={products.image} alt="" className='w-[40%] h-[80%] object-contain'/>
        <div className='content w-[50%]'>
          <h1 className='text-4xl'>{products.title}</h1>
          <h3 className='text-zinc-400 my-5'>{products.category}</h3>
          <h2 className='text-red-400 mb-3'>{`${products.price} $`}</h2>
          <p className='mb-[5%]'>
            {products.description}
          </p>
          <div className='flex items-center gap-5'>
            <Link to={`/edit/${products.id}`} className='py-2 px-5 border border-blue-200 text-blue-300'>Edit</Link>
            <button onClick={handleAddToCart} className={`py-2 px-5 border border-red-200 text-red-300 ${addedToCart ? 'bg-red-600 text-white' : ''}`}>{addedToCart ? 'Added to Cart' : 'Add to Cart'}</button>
            <button onClick={handleWishList} className='py-2 px-5 border border-red-200 text-red-300 text-2xl'>{addedToWishlist ? (<GiRoyalLove />) : (<GiSelfLove />)}</button>
          </div>
        </div>
      </div>
    </div> ) : (<Loading />)
  )
}

export default Details