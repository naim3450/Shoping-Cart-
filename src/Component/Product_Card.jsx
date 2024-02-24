import React from 'react'
import { RiDeleteBin6Fill } from "react-icons/ri";

const Product_Card = ({ className, imgSrc, title, title_two, price, remove,add,placeholder,minus}) => {


    
    return (
        <div className={`${className} w-[1300px] h-[180px] border-b-[1px] border-black py-[15px] flex items-center justify-between bg-white`}>
            <img src={imgSrc} alt="" className='w-[300px] border-[2px] h-[140px]' />

            <div className='w-[280px]'>
                <h1 className='font-sans font-semibold text-[18px]'>{title}</h1>
                <h1 className='font-sans font-medium text-[14px]'>{title_two}</h1>
            </div>


            <div className=" align-middle w-[100px]">
                <button className='text-[30px]' onClick={minus}>-</button>

                <input type="text" placeholder={placeholder} className='w-[30px] text-center text-black font-sans font-semibold outline-none border-black border-[2px] rounded-[5px] mx-[10px]' />

                <button className='text-[30px] hover:text-teal-500' onClick={add} >+</button>
            </div>
            <h2 className='font-sans font-semibold'>{price}</h2>
            <button onClick={remove} className='font-sans font-semibold'> <RiDeleteBin6Fill className='text-[25px] text-red-600 hover:text-black' /></button>
        </div>
    )
}

export default Product_Card