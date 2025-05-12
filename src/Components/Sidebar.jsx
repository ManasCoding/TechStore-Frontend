import { useState } from 'react'
import { useContext } from 'react'
import { ProductContext } from './Context'
import { Link } from 'react-router-dom'
const Sidebar = () => {
    const [products] = useContext(ProductContext);
    console.log(products.length);
    const [length, setLength] = useState(1000); // Initial value set to 100
    
        const handleChange = (event) => {
            setLength(event.target.value);
        };




    let distinct_category = products && products.reduce((acc, cv) => [...acc, cv.category], []);
    distinct_category = [...new Set(distinct_category)];   
    console.log(distinct_category); 


    const color = () => {
        const random = Math.floor(Math.random() * 16777215).toString(16);
        return "#" + random;
    }

    console.log(color());


    return products ? (
    <div className='fixed w-[20%] h-screen bg-zinc-200 fixed overflow-y-scroll scrollbar-hide'>
        <div className='w-full bg-zinc-300'>
            <div className='px-6 flex flex-col gap-2 pt-24'>
                <h1 className='text-sm'>Home / Clothing / Men T-shirts</h1>
                <h2 className='text-sm'>{`Men Products - ${products.length} items`}</h2>
                <h2 className='mb-4 mt-4 text-md font-bold'>FILTERS</h2>
            </div>

            <Link to ="/create" className='py-2 px-5 border border-blue-700 text-blue-700 ml-6'>add new product</Link>

            <hr className='mt-4' />

            <div className=' px-6 flex flex-col gap-2'>
                <h2 className='mb-2 mt-4 text-md font-bold'>CATEGORIES</h2>
                <div className='w-[80%]'>
                    {distinct_category.map((c, i) => (
                        <Link key = {i} to= {`/?category=${c}`} className='mb-3 flex items-center '>
                            <span style={{backgroundColor: color()}} className='rounded-full mr-2 w-[10px] h-[10px]'></span>{""} {c}
                        </Link>
                    ))}
                </div>
            </div>

            <hr />

            <div className='px-6 flex flex-col gap-2 '>
                <h2 className='mb-2 mt-4 text-md font-bold'>Brand</h2>
                <div className='w-[100%] flex flex-col h-[10rem] overflow-y-scroll scrollbar-hide no-scrollbar'>
                    <div className='flex gap-3'><span><input type="checkbox" /></span><span>T-shirts</span></div>
                    <div className='flex gap-3'><span><input type="checkbox" /></span><span>Lounge T-shirts</span></div>
                    <div className='flex gap-3'><span><input type="checkbox" /></span><span>T-shirts</span></div>
                    <div className='flex gap-3'><span><input type="checkbox" /></span><span>Lounge T-shirts</span></div>
                    <div className='flex gap-3'><span><input type="checkbox" /></span><span>T-shirts</span></div>
                    <div className='flex gap-3'><span><input type="checkbox" /></span><span>Lounge T-shirts</span></div>
                    <div className='flex gap-3'><span><input type="checkbox" /></span><span>T-shirts</span></div>
                    <div className='flex gap-3'><span><input type="checkbox" /></span><span>Lounge T-shirts</span></div>
                </div>
                <h2 className='mb-4 mt-2 text-sm text-pink-600'>+ 11 more</h2>
            </div>

            <hr />

            <div className='px-6 flex flex-col gap-2 '>
                <h2 className='mb-2 mt-4 text-md font-bold'>Price</h2>
                <div className='flex flex-col w-[90%]'>
                    <input type="range" min={1} max={1000} value={length} onChange={handleChange}/>
                    <label className='mt-2 mb-4'>1 to {length}</label>
                </div>
            </div>

            <hr />

            <div className=' px-6 flex flex-col gap-2 '>
                <h2 className='mb-2 mt-4 text-md font-bold'>Colour</h2>
                <div className='w-[100%] flex flex-col h-[10rem] overflow-y-scroll scrollbar-hide no-scrollbar'>
                    <div className='flex gap-3'><span><input type="checkbox" className='accent-zinc-900'/></span><span>Black</span></div>
                    <div className='flex gap-3'><span><input type="checkbox" className='accent-green-500'/></span><span>Green</span></div>
                    <div className='flex gap-3'><span><input type="checkbox" className='accent-blue-500'/></span><span>Blue</span></div>
                    <div className='flex gap-3'><span><input type="checkbox" className='accent-gray-500'/></span><span>Gray</span></div>
                    <div className='flex gap-3'><span><input type="checkbox" className='accent-yellow-500'/></span><span>Yellow</span></div>
                    <div className='flex gap-3'><span><input type="checkbox" className='accent-pink-500'/></span><span>Pink</span></div>
                    <div className='flex gap-3'><span><input type="checkbox" className='accent-red-500'/></span><span>Red</span></div>
                    <div className='flex gap-3'><span><input type="checkbox" className='accent-white-900'/></span><span>White</span></div>
                </div>
                <h2 className='mb-4 mt-2 text-sm text-pink-600'>+ 4 more</h2>
            </div>

            <hr />

            <div className=' px-6 flex flex-col gap-2 '>
                <h2 className='mb-2 mt-4 text-md font-bold'>Discount Range</h2>
                <div className='w-[100%] flex flex-col h-[10rem] overflow-y-scroll scrollbar-hide no-scrollbar mb-4'>
                    <div className='flex gap-3'><span><input type="checkbox" /></span><span>10% and above</span></div>
                    <div className='flex gap-3'><span><input type="checkbox" /></span><span>20% and above</span></div>
                    <div className='flex gap-3'><span><input type="checkbox" /></span><span>30% and above</span></div>
                    <div className='flex gap-3'><span><input type="checkbox" /></span><span>40% and above</span></div>
                    <div className='flex gap-3'><span><input type="checkbox" /></span><span>50% and above</span></div>
                    <div className='flex gap-3'><span><input type="checkbox" /></span><span>60% and above</span></div>
                    <div className='flex gap-3'><span><input type="checkbox" /></span><span>70% and above</span></div>
                    <div className='flex gap-3'><span><input type="checkbox" /></span><span>80% and above</span></div>
                    <div className='flex gap-3'><span><input type="checkbox" /></span><span>90% and above</span></div>
                </div>
            </div>

        </div>
    </div>
    ) : ( 
    <Loading/>
  )
}

export default Sidebar
