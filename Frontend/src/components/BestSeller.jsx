import { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const BestSeller = () => {

    const { products } = useContext(ShopContext);
    const [bestSellers, setBestSellers] = useState([]);

    useEffect(() => {  
        const bestProducts = (products.filter((item) => item.bestseller === true));
        setBestSellers(bestProducts.slice(0, 5));
    }, [products]);

    const textVariant = {
      hidden: { opacity: 0, y: 20 },
      visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.4, duration: 0.8 },
      }),
    };

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl sm:text-4xl prata-regular">
        <motion.div
          custom={1}
          initial="hidden"
          animate="visible"
          variants={textVariant}
        >
          <Title text1={"BEST"} text2={"SELLERS"} />
        </motion.div>
        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={textVariant}
          className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600"
        >
          Check out our best sellers and discover the latest trends in fashion.
        </motion.p>
      </div>

      <div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {bestSellers.map((item, index) => (
            <motion.div
              key={item._id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              <ProductItem
                key={index}
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BestSeller