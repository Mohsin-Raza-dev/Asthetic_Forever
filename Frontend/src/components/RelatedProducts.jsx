import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const RelatedProducts = ({category, subCategory}) => {
    const { products, currency } = useContext(ShopContext);
    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
        let filteredProducts = products.slice()

        filteredProducts = filteredProducts.filter((item) => category === item.category)
        filteredProducts = filteredProducts.filter((item) => subCategory === item.subCategory)

        setRelatedProducts(filteredProducts.slice(0, 5));

    },[category, subCategory, products])
  return (
      <div className='my-30'>
          <div className='text-center text-3xl py-2'>
              <Title text1="Related" text2="Products" />
          </div>
          <div className=' mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
              {relatedProducts.map((item, index) => {
                  <ProductItem
                      key={index}
                      id={item._id}
                      image={item.image}
                      name={item.name}
                      price={item.price} />
              })}
              
          </div>
    </div>
  )
}

export default RelatedProducts