import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/slice/cartSlice';
import { fetchTodo } from '../redux/slice/todoSlice';


function ProductData() {
  const dispatch = useDispatch()

  const productsData = useSelector((state) => state.product.products.products)
  useEffect(()=>{
    dispatch(fetchTodo())

  },[])




const handleCart = (product)=>{
  dispatch(addToCart(product))

}
console.log(productsData);

  return (
    <div>
      <div className='grid grid-cols-12 gap-5'>
        {
          productsData && productsData.map((product) => (
            <div key={product.id} className='col-span-12 md:col-span-3 bg-slate-100 p-5 rounded-lg shadow-lg '>
              <div className='flex items-center justify-between px-1 py-3'>
                <button className='bg-black px-3 py-1 rounded-md text-white'>{product.brand}</button>
                <button className='bg-black px-3 py-1 rounded-md text-white'>{product.category}</button>
              </div>
              <img className='w-[150px] h-[150px] object-cover object-left-top flex justify-center items-center mx-auto' src={product.images[0]} alt="" />
              <div className='flex justify-between mb-5'>
                <p>price :{product.price}$</p>
                <p>Stock :{product.stock}</p>
              </div>
              <h1 className='text-center text-3xl font-bold'>{`${product.title.slice(0, 20)}...`}</h1>
              <p className='text-justify'>{product.description}</p>
              <button onClick={()=>handleCart(product)} className='bg-green-600 w-full py-1 px-5 rounded-md text-white my-5'>Add to Cart</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ProductData
