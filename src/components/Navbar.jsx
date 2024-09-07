import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Navbar() {
  const {cartItem} = useSelector((state)=>state.cart)
  return (
    <div className='bg-black py-6 flex justify-between text-white '>
      <div className=' container mx-auto flex justify-between'>
        Logo 
        <div>
            <ul className='flex gap-10 text-white'>
                <Link to={"/home"}>Home</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/product"}>Product</Link>
                
                <Link className='relative' to={"/cart"}>Cart
                <div className='w-[18px] h-[18px] bg-red-600 absolute -top-3 right-0 flex justify-center items-center rounded-full'>
                  {cartItem.length}
                  
                </div>
                
                </Link>
            </ul>
        </div>

      </div>
    </div>
  )
}

export default Navbar
