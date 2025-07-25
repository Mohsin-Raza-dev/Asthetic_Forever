import React, { useContext } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

    
  return (
    <Link to={`/product/${id}`} className="text-gray-700 cursor-pointer">
      <div className='overflow-hidden'>
        <img src={image[0]} className="hover:scale-110 transition ease-in-out duration-300" alt="product" />
        <p className=" pt-3 pb-1 text-sm">{name}</p>
        <p className='text-sm font-medium'>{currency}{price}</p>
      </div>
    </Link>
  )
}

export default ProductItem;