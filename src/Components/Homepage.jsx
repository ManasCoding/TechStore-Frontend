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

    const { search } = useLocation();
    // const searchParams = search.search;
    // console.log(searchParams);
    // const searchParams = new URLSearchParams(search);
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

        <div className="w-[60%] sm:w-[78%] bg-zinc-100 text-white h-full fixed right-0 overflow-y-scroll scrollbar-hide">
            <div className='py-4 flex flex-wrap gap-12 h-full w-full mt-20'>

                {fillteredProducts && fillteredProducts.map((product) => (
                    <Link to={`/details/${product.id}`}><div className='h-[18rem] w-[14rem]'>
                        <div className='h-[50%] sm:h-[70%] w-[40%] sm:w-[100%] bg-blue-500'><img src={product.image} alt="" className='w-full h-full object-cover'/></div> 

                        <div className='px-2 py-2 bg-zinc-300 text-black'>
                            <div className='text-sm'>{product.title}</div>
                            <div className='text-sm'>{product.category}</div>
                            <div className='text-sm'><span>{product.price}</span><span> $</span></div>
                        </div>
                    </div></Link>
                    ))}
            </div>
        </div>
    </div>
  ) : (<Loading />);
}

export default Homepage