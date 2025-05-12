import { useState, useEffect, useContext } from "react"
import { useLocation } from "react-router-dom"
import Sidebar from "./Sidebar"
import { Link } from "react-router-dom"
import { ProductContext } from "./Context"
import Loading from "./Loading"
import axios from "./axios"
const Homepage = () => {

    const [products] = useContext(ProductContext);
    console.log(products);

    const {search} = useLocation();
    console.log(search);
    const category = decodeURIComponent(search.split("=")[1]);
    console.log(category);

    
    //let fillteredproducts = products && products;
    const [fillteredProducts, setFillteredProducts] = useState(null);
    const getproductscategory = async () => {
        try {
            const { data } = await axios.get(`/products/category/${category}`);
            setFillteredProducts(data);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (!fillteredProducts || category == "undefined") setFillteredProducts(products);
        if (category != "undefined") {

        setFillteredProducts(products.filter((product) => product.category == category));
        getproductscategory();

        }
    }, [category, products]); 

    console.log(fillteredProducts);
    

  return products ? ( 
    <div className='flex'>
        <Sidebar />

        <div className="w-[78%] text-white h-full fixed right-0 overflow-y-scroll scrollbar-hide">
            <div className='py-4 flex flex-wrap gap-12 h-full w-full mt-20'>

                {fillteredProducts && fillteredProducts.map((product) => (
                    <Link to={`/details/${product.id}`}><div className='h-[18rem] w-[14rem]'>
                        <div className='h-[70%] bg-blue-500'><img src={product.image} alt="" className='w-full h-full object-cover'/></div> 

                        <div className='px-2 py-2 bg-zinc-300 text-black'>
                            <div className='text-sm'>{product.title}</div>
                            <div className='text-sm'>{product.category}</div>
                            <div className='text-sm'><span>{product.price}</span><span> $</span></div>
                        </div>
                    </div></Link>
                    ))}

                    <div className='h-[18rem] w-[14rem]'>
                        <div className='h-[70%] bg-blue-500'><img src="https://th.bing.com/th/id/OIP._GXCoZrkA3GKCq1XLZkPmQHaLH?w=133&h=199&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="" className='w-full h-full object-cover'/></div>

                        <div className='px-2 py-2 bg-zinc-300 text-black'>
                            <div className='text-sm'>A random day in Dubai</div>
                            <div className='text-sm'>rajendra prasad</div>
                            <div className='text-sm'><span>336k views</span><span>3 days ago</span></div>
                        </div>
                    </div>
                    <div className='h-[18rem] w-[14rem]'>
                        <div className='h-[70%] '><img src="https://th.bing.com/th/id/OIP.HvsweadVE92lpHnS8wLchgHaHa?w=199&h=199&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="" className='w-full h-full object-cover'/></div>

                        <div className='px-2 py-2 bg-zinc-300 text-black'>
                            <div className='text-sm'>A random day in Dubai</div>
                            <div className='text-sm'>rajendra prasad</div>
                            <div className='text-sm'><span>336k views</span><span>3 days ago</span></div>
                        </div>
                    </div>
                    <div className='h-[18rem] w-[14rem]'>
                        <div className='h-[70%] bg-blue-500'><img src="https://th.bing.com/th/id/OIP.O6U-TPwsWAUDB-CsuCfKBgHaHh?w=183&h=186&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="" className='w-full h-full object-cover'/></div> 
                        <div className='px-2 py-2 bg-zinc-300 text-black'>
                            <div className='text-sm'>A random day in Dubai</div>
                            <div className='text-sm'>rajendra prasad</div>
                            <div className='text-sm'><span>336k views</span><span>3 days ago</span></div>
                        </div>
                    </div>
                    <div className='h-[18rem] w-[14rem]'>
                        <div className='h-[70%]'><img src="https://th.bing.com/th/id/OIP.x_pnoJVUoMb2nMCYpyqeIQHaHh?w=187&h=191&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="" /></div>

                        <div className='px-2 py-2 bg-zinc-300 text-black'>
                            <div className='text-sm'>A random day in Dubai</div>
                            <div className='text-sm'>rajendra prasad</div>
                            <div className='text-sm'><span>336k views</span><span>3 days ago</span></div>
                        </div>
                    </div>
                    <div className='h-[18rem] w-[14rem]'>
                        <div className='h-[70%] bg-blue-500'><img src="https://th.bing.com/th/id/OIP._XzJ9UULGP6LH5Tb5iH2IQHaHa?w=165&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" className="w-full h-full object-cover" alt="" /></div>

                        <div className='px-2 py-2 bg-zinc-300 text-black'>
                            <div className='text-sm'>A random day in Dubai</div>
                            <div className='text-sm'>rajendra prasad</div>
                            <div className='text-sm'><span>336k views</span><span>3 days ago</span></div>
                        </div>
                    </div>
                    
            </div>
        </div>
    </div>
  ) : (<Loading />);
}

export default Homepage