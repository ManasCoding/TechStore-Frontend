import React from 'react'
import Navbar from './Pages/Navbarcopy'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const Login = () => {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("please signup first");
    navigate("/signup");

  }
  return (
    <div>
        <Navbar />
        <div className="h-screen w-screen bg-zinc-900 p-10 text-white flex flex-col justify-center items-center">
            <h1 className="text-3xl mb-6">Log In</h1>
            <form className="flex flex-col gap-5 w-96" onSubmit={handleSubmit}>
              <input 
                className="px-5 py-2 bg-transparent border-2 border-zinc-800 rounded-lg outline-none" 
                type="email" 
                name="email" 
                placeholder="Email"
                
                
              />
              <input 
                className="px-5 py-2 bg-transparent border-2 border-zinc-800 rounded-lg outline-none" 
                type="password" 
                name="password" 
                placeholder="Password"
                
              />
              {/* <input 
                className="px-5 py-2 bg-blue-600 rounded-lg cursor-pointer" 
                type="submit" 
              /> */}

              <button type='submit' className="px-5 py-2 bg-blue-600 rounded-lg cursor-pointer">Login</button>
              
            </form>
        </div>
    </div>
  )
}

export default Login