import { useState, useContext } from 'react'
import { ProductContext } from './Context';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const Create = () => {
    const navigate = useNavigate();
    const [products, setproducts] = useContext(ProductContext);
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState(null);
    const [category, setCategory] = useState(null);
    const [price, setPrice] = useState(null);
    const [description, setDescription] = useState(null);



    const AddProductHandler = (e) => {
        e.preventDefault();

        if (title.trim().length < 5 || category.trim().length < 5 ||
           price.trim().length < 1 || description.trim().length < 5 || image.trim().length < 5) {
           alert("All fields are required")
           return;
        };

        const product = {id: nanoid(), image, title, category, price, description};
        console.log(product);
        setproducts([product, ...products]);
        localStorage.setItem("products", JSON.stringify([...products, product]));
        toast.success("Product added successfully");
        navigate("/home");
    }





  return (
    <div className='w-full h-screen'>
        {/* <div><Page /></div> */}
        <form onSubmit={AddProductHandler} className='flex flex-col justify-center items-center p-[5%] w-screen h-screen'>
            <h1 className='text-2xl text-red-600 mb-5 w-1/2'>Add new product</h1>
            <input type="url" placeholder='image url' className='w-1/2 rounded border-zinc-400 p-3 mb-5 bg-zinc-200' onChange={(e) => {
                console.log(e.target.value);
                setImage(e.target.value);
                value = {image}
            }}/>
            <input type="text" placeholder='title' className='w-1/2 rounded border-zinc-400 p-3 mb-5 bg-zinc-200' onChange={(e) => {
                console.log(e.target.value);
                setTitle(e.target.value);
                value = {title}
            }}/>
            <input type="text" placeholder='category' className='w-1/2 rounded border-zinc-400 p-3 mb-5 bg-zinc-200' onChange={(e) => {
                console.log(e.target.value);
                setCategory(e.target.value);
                value = {category}
            }}/>
            <input type="number" placeholder='price' className='w-1/2 rounded border-zinc-400 p-3 mb-5 bg-zinc-200' onChange={(e) => {
                console.log(e.target.value);
                setPrice(e.target.value);
                value = {price}
            }}/>
            <textarea type="text" placeholder='description' className='w-1/2 rounded border-zinc-400 p-3 mb-5 bg-zinc-200' onChange={(e) => {
                console.log(e.target.value);
                setDescription(e.target.value);
                value = {description}
            }}></textarea>
            <div><button type='submit' className='py-2 px-5 border border-blue-700 text-blue-700 ml-6'>Add Product</button></div>
        </form>
    </div>
  )
}

export default Create