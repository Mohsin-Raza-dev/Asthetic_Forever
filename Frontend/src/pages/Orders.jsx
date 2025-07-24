import  { useContext } from 'react'
import Title from '../components/Title'
import { ShopContext } from '../context/ShopContext';

const Orders = () => {
  const { products, currency } = useContext(ShopContext);


  return (
    <div className="border-t pt-14">
      <div className="text-xl sm:text-2xl">
        <Title text1="MY" text2="ORDERS" />
      </div>

      <div className="">
        {products.slice(1, 4).map((item, index) => (
          <div
            key={index}
            className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div className="flex items-start gap-6 text-sm">
              <img
                src={item.image[0]}
                className="w-16 sm:w-20"
                alt="product image"
              />
              <div>
                <p className="font-medium sm:text-base">{item.name}</p>
                <div className="flex items-center gap-3 mt-2 text-base">
                  <p>
                    {currency}
                    {item.price}
                  </p>
                  <p className="text-sm text-gray-500">
                    Quantity: {item.quantity}
                  </p>
                  <p className="text-sm text-gray-500">Size: {item.size}</p>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Ordered on: {item.date}
                </p>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-between">
              <div className="flex items-center gap-2">
                <p className="min-w-2 h-2 rounded-full bg-green-500">
                </p>
                <p className='text-sm text-gray-600 md:text-base'>Ready to ship</p>
              </div>
                <button className="border border-gray-400 px-8 py-2 cursor-pointer hover:border-gray-700">
                  Track Order
                </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders