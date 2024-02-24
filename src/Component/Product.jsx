import React, { useContext } from 'react'
import Product_Card from './Product_Card'
import RemoveContext from '../Context/RemoveContext'
import { IoCartSharp } from "react-icons/io5";

const Product = () => {

  const { item } = useContext(RemoveContext)

  // For remove item
  const { Removerbtn } = useContext(RemoveContext)
  // For remove item

  // For Clear_Cart
  const { Clear_Cart } = useContext(RemoveContext)
  // For Clear_Cart

  // For Increment
  const { Increment } = useContext(RemoveContext)
  // For Increment

  // For Decrement
  const { Decrement } = useContext(RemoveContext)
  // For Decrement

  // For totalItem
  const { totalItem } = useContext(RemoveContext)
  // For totalItem

  // For totalAmount
  const { totalAmount } = useContext(RemoveContext)
  // For totalAmount

  return (
    <div className='w-[1300px] mx-auto'>

      <div className="flex justify-between my-[50px]">
        <h2 className='text-[22px] font-serif font-semibold'>You have  {totalItem} item</h2>

        {/* Add to cart  */}
        <div className="relative">
          <IoCartSharp className='text-[40px] font-serif font-semibold' />
          <h2 className='text-[16px] bg-teal-500 w-[20px] h-[20px] rounded-[50%] font-serif font-medium absolute bottom-0 right-0 '>{totalItem}</h2>
        </div>
        {/* Add to cart  */}

      </div>

      <div>
        {
          item.map((val) => {
            return (

              <Product_Card
                key={val.id}
                imgSrc={val.thumbnail}
                title={val.title}
                title_two={val.category}
                remove={() => Removerbtn(val.id)}
                placeholder={val.quantity}
                add={() => Increment(val.id)}
                minus={() => Decrement(val.id)}
                {...val} />
            )
          })
        }
      </div>

      <div className="flex justify-end">
        <h3 className='text-[22px] font-bold font-sans mt-[20px]'>Total Amount : {totalAmount}$ </h3>
      </div>

      <button
        onClick={Clear_Cart}
        className='bg-red-600 text-white text-[22px] font-semibold font-sans py-[5px] px-[10px] mt-[20px] ml-[1181px]'>
        Clear Cart</button>
    </div>
  )
}

export default Product