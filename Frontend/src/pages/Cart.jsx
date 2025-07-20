import {useState, useEffect, useContext} from 'react'
import Title from '../components/Title'
import { ShopContext } from '../context/ShopContext'


const Cart = () => {
  const { products, cartItems, currency, setCartItems } = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {

    let tempData = [];

    for (let id in cartItems) {
      for (let size in cartItems[id]) {
        if (cartItems[id][size] > 0) {
          tempData.push({ id, size, quantity: cartItems[id][size] });
        }
        }  
    }
    
    setCartData(tempData);

  },[cartItems])
  
  const increment = (id, size) => {
    const updated = {...cartItems}
    updated[id][size] += 1;
    setCartItems(updated);
  }
  const decrement = (id, size) => {
    const updated = { ...cartItems }
    if (updated[id][size]) {
      updated[id][size] -= 1;
    } else {
      delete updated[id][size];
      if (Object.keys(updated[id]).length === 0) {
        delete updated[id];
      }
    }
    setCartItems(updated);
  }
  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title text1={"My"} text2={"Cart"} />
      </div>
      <div>
        {
          cartData.map((item, index) => {
            const productData = products.find((product) => product._id.toString() === item.id.toString());

            return (
              <div
                key={index}
                className="py-4 border-b border-gray-300 text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grod-cols-[4fr_2fr_0.5fr] items-center gap-4"
              >
                <div
                  className="flex items-start
                 gap-6"
                >
                  <img
                    src={productData.image[0]}
                    alt="product"
                    className="w-16 sm:w-20 object-fit"
                  />
                  <div>
                    <p className="text-sm sm:text-lg font-medium">
                      {productData.name}
                    </p>
                    <div className="flex items-center gap-5 mt-2">
                      <p>
                        {currency}
                        {productData.price}
                      </p>
                      <p className="px-2 sm:px-3 sm:py-1 border border-gray-100 bg-slate-100">
                        {item.size}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => decrement(item.id, item.size)}
                    className="border border-gray-300 px-3 py-1"
                  >
                    -
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    onClick={() => increment(item.id, item.size)}
                    className="border border-gray-300 px-3 py-1"
                  >
                    +
                  </button>
                </div>
              </div>
            );
          })
        }

      </div>
    </div>
  );
}

export default Cart