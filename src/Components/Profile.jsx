import Footer from './Footer'

const Profile = () => {
  return (
    <div>
        <div className='bg-zinc-200 w-full flex flex-col items-center align-center pt-16'>
            <div className='w-3/4 bg-zinc-400 flex justify-between items-center align-center p-4'>
                <h1 className='text-sm font-bold p-2'>Account User</h1>
                <h1 className='text-sm'>Order & Returns</h1>
                <h1 className='text-sm'>Coupons</h1>
                <h1 className='text-sm '>Tech Credit</h1>
                <h1 className='text-sm '>TechCash</h1>
                <h1 className='text-sm '>Saved Cards</h1>
                <h1 className='text-sm '>Saved Wallets</h1>
                <h1 className='text-sm '>Addresses</h1>
                <h1 className='text-sm font-bold p-2 text-red-600'>Delete Account</h1>              
            </div>

            <div className='w-2/4 bg-zinc-400 flex flex-col justify-between items-center align-center mt-6 p-4 leading-loose'>
                <div className='font-bold mb-6 flex justify-between items-center align-center gap-36'>
                    <div className='text-xl'>Profile Details</div>
                    <a href="/"><div className='text-red-600 text-lg'>Logout</div></a>
                </div>

                <div className='flex justify-between items-center align-center gap-32'>
                    <div>
                        <h1>Full Name</h1>
                        <h1>Mobile Number</h1>
                        <h1>Email ID</h1>
                        <h1>Gender</h1>
                        <h1>Date of Birth</h1>
                    </div>

                    <div>
                        <h1>- not added -</h1>
                        <h1>- not added -</h1>
                        <h1>- not added -</h1>
                        <h1>- not added -</h1>
                        <h1>- not added -</h1>
                    </div>
                </div>

                <div className='text-xl font-bold px-44 py-2 text-white bg-pink-700 mt-6 mb-6'>Edit</div>
            </div>

            <Footer />
        </div>
    </div>
  )
}

export default Profile