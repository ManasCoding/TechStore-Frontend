import axios from 'axios'
import { useState } from 'react'
import Navbar from './Pages/Navbarcopy';

const Signup = () => {
    const [userInfo, setUserInfo] = useState({
          name: "",
          email: "",
          password: "",
        });
    
      let { name, email, password, } = userInfo;
    
      function handleChange(e) {
        setUserInfo({
          ...userInfo,
          [e.target.name]: e.target.value,
        });
      }
    
    
      // let form = new FormData();
      // form.append("name", name);
      // form.append("email", email);
      // form.append("password", password);
    
    
      // const [email, setEmail] = useState("")
      // const [password, setPassword] = useState("")
      // const [name, setName] = useState("")
    
      const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(e)
        try {
          alert("Signup Successfull")
          console.log(userInfo)
          let response = await axios.post('http://localhost:5000/users/signup', userInfo)
            console.log(response);
            alert(response.data.message);
          } catch (error) {
            console.log(error);
          }
      }
    
  return (
    <div>
        <Navbar />
        <div className='w-screen h-screen bg-zinc-900 p-10 text-white flex flex-col justify-center items-center'>
            <h1 className="text-3xl mb-6 text-center">Sign Up</h1>
            <form 
            action= "/users/signup"
            onSubmit={handleSubmit} 
            className="flex flex-col gap-5 w-96">
              <input
                className="px-5 py-2 bg-transparent border-2 border-zinc-800 rounded-lg outline-none"
                type="text"
                name={"name"}
                placeholder="Name"
                value={name}
                onChange = {handleChange}
                
              />
              <input
                className="px-5 py-2 bg-transparent border-2 border-zinc-800 rounded-lg outline-none"
                type="email"
                name={"email"}
                placeholder="Email"
                value={email}
                onChange = {handleChange}
              />
              <input
                className="px-5 py-2 bg-transparent border-2 border-zinc-800 rounded-lg outline-none"
                type="password"
                name={"password"}
                placeholder="Password"
                value={password}
                onChange = {handleChange}
              />
              {/* <input
                className="px-5 py-2 bg-blue-600 rounded-lg cursor-pointer"
                type="submit"
              /> */}
              <button type='submit' className="px-5 py-2 bg-blue-600 rounded-lg cursor-pointer">Signup</button>
            </form>    
        </div>
    </div>
  )
}

export default Signup