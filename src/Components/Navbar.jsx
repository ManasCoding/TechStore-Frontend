import { CiSearch } from "react-icons/ci";
import { PiShoppingCartLight } from "react-icons/pi";
import { GiSelfLove } from "react-icons/gi";
import { GiNunFace } from "react-icons/gi";
import { Link } from "react-router-dom";
const NavBar = () => {

  // const navLinks = [
  //   {
  //     name: "Home",
  //     link: "/home",
  //   },
  //   {
  //     name: "Men",
  //     link: "/men",
  //   },
  //   {
  //     name: "Women",
  //     link: "/women",
  //   },
  //   {
  //     name: "Kids",
  //     link: "/kids",
  //   },
  //   {
  //     name: "Admin",
  //     link: "/admin",
  //   },
  // ];

  return (
    <div>
          <div className="flex justify-between items-center align-center bg-zinc-300 text-black px-10 py-2 fixed top-0 left-0 w-full z-50">

              <div className="flex gap-20">
                  <div className="flex flex-col "><span className="font-bold text-3xl text-red-600">Tech</span><span className="text-sm ml-8 mt-[-0.5rem] text-blue-600">Store</span></div>

                  <div className="flex justify-between items-center gap-10">
                    <Link to={"/home"}>Home</Link>
                    <Link to={"/men"}>Men</Link>
                    <Link to={"/women"}>Women</Link>
                    <Link to={"/kids"}>Kids</Link>
                    <Link to={"/admin"}>Admin</Link>
                  </div>
              </div>


              <div className="flex justify-between items-center align-center border-[1px] border-zinc-800 rounded-lg px-2">
                  <div><span className="text-2xl"><CiSearch /></span></div>
                  <div className="px-2 py-1"><input type="text" placeholder="Search" className="w-96 px-1 rounded-lg py-1 bg-zinc-300 border-[1px] outline-none border-none"/></div>
              </div>

              <div className="flex justify-between items-center align-center gap-10">

                  <Link to = "/profile">
                    <div className="flex flex-col items-center align-center">
                      <span className="text-2xl"><GiNunFace /></span>
                      <span className="text-sm">Profile</span>
                    </div>
                  </Link>

                  <Link to = "/wishlist">
                    <div className="flex flex-col items-center align-center">
                      <span className="text-2xl"><GiSelfLove /></span>
                      <span className="text-sm">Wishlist</span>
                    </div>
                  </Link>

                  <Link to = "/cart">    
                    <div className="flex flex-col items-center align-center">
                      <span className="text-2xl"><PiShoppingCartLight /></span>
                      <span className="text-sm">Cart</span>
                    </div>
                  </Link>
              </div>
          </div>
    </div>
  );
}

export default NavBar;
