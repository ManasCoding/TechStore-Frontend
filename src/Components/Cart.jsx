import { useContext, useState } from 'react'
import { CartContext } from "./Context";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
export const Cart = () => {
    const cart = useContext(CartContext);
    console.log(cart);
    const navigate = useNavigate();
    const {products, setProducts} = cart;
    const total = cart.item.reduce((a, b) => a + b.price, 0)

    const ProductDeletHandler = (id) => {
      toast.success("Product deleted successfully");
      navigate("/home");
      const filteredProducts = products.filter((product) => product.id !== id);
      setProducts(filteredProducts);
      console.log(filteredProducts);
      localStorage.setProducts("products", JSON.stringify(filteredProducts));
    };


  return (
    <div>
        <p className='text-4xl flex items-center justify-center'>Carts</p>
        {
            // cart && cart.item.map(item => <li>{item.title} - {item.price}</li>)
            cart && cart.item.map(item => <li>
              <div className='w-[50%] flex h-full justify-center gap-28 items-center m-auto p-10 border-2 border-zinc-400'>
                <img src={item.image} alt="" className='w-[40%] h-[80%] object-contain'/>
                <div className='content w-[50%]'>
                  <h1 className='text-4xl'>{item.title}</h1>
                  <h3 className='text-zinc-400 my-5'>{item.category}</h3>
                  <h2 className='text-red-400 mb-3'>{`${item.price} $`}</h2>
                  <p className='mb-[5%]'>
                    {item.description}
                  </p>
                  {/* <Link to={`/edit/${products.id}`} className='py-2 px-5 border border-blue-200 text-blue-300 mr-3'>Edit</Link> */}
                <button onClick={() => ProductDeletHandler(item.id)} className='py-2 px-5 border border-red-200 text-red-300 hover:bg-red-100'>Remove</button>
                <button className='py-2 px-5 border border-red-200 text-red-300 ml-3 hover:bg-red-100'>Buy Now</button>
                </div>
              </div>
            </li>)
        }
        <p className='text-4xl flex items-center justify-center mt-10 mb-10'><span className='text-red-600'>total bill: </span> {total}<span className='text-red-600'>$</span>
        <button className='py-2 px-5 border border-red-200 text-red-600 ml-3 text-2xl bg-red-100 hover:bg-red-600 hover:text-white'>Pay Now</button>
        </p>
    </div>
  )
} 

export default Cart