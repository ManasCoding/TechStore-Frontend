// import { useContext } from 'react'
// import { WishContext } from "./Context";
export const Wishlist = () => {
    // const wishlist = useContext(WishContext);
    // console.log("wishlist", wishlist);
    // const [products, setProducts] = useState(null);
  return (
    <div>
        <p className='h-screen text-4xl flex items-center justify-center'>Wishlist page is under development</p>
        {
            // cart && cart.item.map(item => <li>{item.title} - {item.price}</li>)
            // wishlist && wishlist.wish.map(wish => <li>
            //   <div className='w-[50%] flex h-full justify-center gap-28 items-center m-auto p-10 border-2 border-zinc-400'>
            //     <img src={wish.image} alt="" className='w-[40%] h-[80%] object-contain'/>
            //     <div className='content w-[50%]'>
            //       <h1 className='text-4xl'>{wish.title}</h1>
            //       <h3 className='text-zinc-400 my-5'>{wish.category}</h3>
            //       <h2 className='text-red-400 mb-3'>{`${wish.price} $`}</h2>
            //       <p className='mb-[5%]'>
            //         {wish.description}
            //       </p>
            //       {/* <Link to={`/edit/${products.id}`} className='py-2 px-5 border border-blue-200 text-blue-300 mr-3'>Edit</Link> */}
            //     <button className='py-2 px-5 border border-red-200 text-red-300 hover:bg-red-100'>Remove</button>
            //     <button className='py-2 px-5 border border-red-200 text-red-300 ml-3 hover:bg-red-100'>Buy Now</button>
            //     </div>
            //   </div>
            // </li>)
        }
    </div>
  )
} 

export default Wishlist