import NavBar from './Navbar'
import Footer from './Footer'
const Landing = () => {
  return (
    <div>
      <NavBar />
      <div className='flex justify-between items-center'>





      
        <div className='w-full h-screen bg-zinc-900 p-10 text-white flex flex-col justify-center items-center'>
            <h1 className="text-3xl mb-6 text-center">Sign Up</h1>
            <form action="" method="POST" className="flex flex-col gap-5 w-96">
              <input
                className="px-5 py-2 bg-transparent border-2 border-zinc-800 rounded-lg outline-none"
                type="text"
                name="name"
                placeholder="Name"
              />
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
              <input
                className="px-5 py-2 bg-transparent border-2 border-zinc-800 rounded-lg outline-none"
                type="number"
                name="age"
                placeholder="Age"
              />
              <input
                className="px-5 py-2 bg-blue-600 rounded-lg cursor-pointer"
                type="submit"
                value="Signup"
              />
            </form>    
        </div>










        <div className="w-full h-screen bg-zinc-900 p-10 text-white flex flex-col justify-center items-center">
            <h1 className="text-3xl mb-6">Log In</h1>
            <form action="/login" method="POST" className="flex flex-col gap-5 w-96">
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
              <input 
                className="px-5 py-2 bg-blue-600 rounded-lg cursor-pointer" 
                type="submit" 
                value="Login"
              />
            </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Landing