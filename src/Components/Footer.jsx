import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
        <div className='flex justify-between items-center bg-zinc-200 text-black px-20 py-10'>
            <div className='flex flex-col gap-2'>
                <h1 className='font-bold text-xs mb-4'>ONLINE SHOPPING</h1>
                <h1 className='text-xs'>Home</h1>
                <h1 className='text-xs'>Men</h1>
                <h1 className='text-xs'>Women</h1>
                <h1 className='text-xs'>Kids</h1>
                <h1 className='text-xs'>Gift Cards</h1>
                <h1 className='text-xs'>Tech insider</h1>
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='font-bold text-xs mb-4'>USEFUL LINKS</h1>
                <h1 className='text-xs'>Blog</h1>
                <h1 className='text-xs'>Careers</h1>
                <h1 className='text-xs'>Site Map</h1>
                <h1 className='text-xs'>Corporate Information</h1>
                <h1 className='text-xs'>Whitehat</h1>
                <h1 className='text-xs'>Cancellation</h1>
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='font-bold text-xs mb-4'>CUSTOMER POLICIES</h1>
                <h1 className='text-xs'>Contact Us</h1>
                <h1 className='text-xs'>FAQ</h1>
                <h1 className='text-xs'>T&C</h1>
                <h1 className='text-xs'>Terms Of Use</h1>
                <h1 className='text-xs'>Track Orders</h1>
                <h1 className='text-xs'>Shipping</h1>
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='font-bold text-xs mb-4'>EXPERIENCE MYNTRA APP ON MOBILE</h1>
                <div>
                    <div>Facebook</div>
                    <div>Twitter</div>
                </div>
                <h1>KEEP IN TOUCH</h1>
                <div className='flex gap-2'>
                    <div><span><FaFacebookSquare className='text-blue-600'/></span></div>
                    <div><span><FaInstagramSquare className='text-pink-600'/></span></div>
                    <div><span><FaLinkedin className='text-blue-600'/></span></div>
                    <div><span><FaTwitterSquare className='text-blue-600'/></span></div>
                </div>
            </div>
            <div>
                <div><span className='font-bold'>100% ORIGINAL guarantee</span> for all products at Techstore.com</div>
                <div><span className='font-bold'>Return within 30days</span> of receiving your order</div>
            </div>
        </div>

        <div className='text-black px-20 py-10 bg-zinc-200'>
            <h1 className='font-bold text-xs mb-4'>KEEP IN TOUCH</h1>
            <p className='text-xs leading-8'>Nike | Puma | Adidas | Fila | Lee | United Colors of Benetton | Wrangler | Fastrack | Woodland | Yepme | Levis | Tommy Hilfiger | peter-england | fabindia | nike shoes | tops | shirts | jackets | Techstore coupons | kurtis | shoes | tunics | dresses | Watches | saree | kurtas | bags | T-shirts | designer saree | sunglasses | jeans | trousers | adidas shoes | casual shoes | sports shoes | fastrack watches | ethnic wear | woodland-shoes | mobile app | puma shoes | accessories | anarkali suit | running shoes | reebok | formal wear | cat | jewellery</p>
        </div>
    </div>
  )
}

export default Footer