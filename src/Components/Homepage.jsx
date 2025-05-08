import { useState } from 'react'
const Homepage = () => {

    const [length, setLength] = useState(100); // Initial value set to 100

    const handleChange = (event) => {
        setLength(event.target.value);
  };

  return (
    <div className='flex'>

        <div className='w-[18%] bg-zinc-300'>
            <div className='mt-20 px-6 flex flex-col gap-2'>
                <h1 className='text-sm'>Home / Clothing / Men T-shirts</h1>
                <h2 className='text-sm'>Men T-shirts - 213897 items</h2>
                <h2 className='mb-4 mt-4 text-md font-bold'>FILTERS</h2>
            </div>

            <hr />

            <div className=' px-6 flex flex-col gap-2'>
                <h2 className='mb-2 mt-4 text-md font-bold'>CATEGORIES</h2>
                <div className='flex gap-3'><span><input type="checkbox" /></span><span>T-shirts</span></div>
                <div className='flex gap-3 mb-4'><span><input type="checkbox" /></span><span>Lounge T-shirts</span></div>
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
                <h2 className='mb-4 mt-2 text-sm text-pink-600'>+ 1168 more</h2>
            </div>

            <hr />

            <div className='px-6 flex flex-col gap-2 '>
                <h2 className='mb-2 mt-4 text-md font-bold'>Price</h2>
                <div className='flex flex-col w-[90%]'>
                    <input type="range" min={100} max={10000} value={length} onChange={handleChange}/>
                    <label className='mt-2 mb-4'>100 to {length}</label>
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
                <h2 className='mb-4 mt-2 text-sm text-pink-600'>+ 45 more</h2>
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




























        <div className="w-[82%] text-white h-full">
            <div className='py-6 px-6 flex flex-wrap gap-12 h-full w-full mt-20'>

                    <div className='h-[18rem] w-[14rem]'>
                        <div className='h-[70%] bg-blue-500'><img src="https://image.hm.com/assets/hm/20/eb/20eb77111a9d172354c77d5f4cca17075063e628.jpg?imwidth=768" alt="" className='w-full h-full object-cover'/></div>

                        <div className='px-2 py-2 bg-zinc-300 text-black'>
                            <div className='text-sm'>A random day in Dubai</div>
                            <div className='text-sm'>rajendra prasad</div>
                            <div className='text-sm'><span>336k views</span><span>3 days ago</span></div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Homepage