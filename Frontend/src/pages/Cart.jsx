import {useState, useEffect, useContext} from 'react'
import Title from '../components/Title'
import { ShopContext } from '../context/ShopContext'
import { MdDeleteForever } from "react-icons/md";
import CartTotal from '../components/CartTotal';
import { useNavigate } from 'react-router-dom';


const Cart = () => {
  const { products, cartItems, currency, setCartItems } = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  const navigate = useNavigate();

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

  }, [cartItems])

  const handleQuantityChange = (id, size, quantity) => {
    const qty = parseInt(quantity);

    if (isNaN(qty) || qty < 0) return;

    setCartItems((prevItems) => {
      const updated = { ...prevItems };

      if (!updated[id]) updated[id] = {};

      updated[id][size] = qty;

      return updated;
    });
  };

  const handleDeleteItem = (id, size) => {
    const updated = { ...cartItems };

    delete updated[id][size];

    if (Object.keys(updated[id]).length === 0) {
      delete updated[id];
    }

    setCartItems(updated);
  };
  
  
  
  return (
    <div className="border-t pt-14">
      {cartData.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[300px] text-center text-gray-500">
            <p className="text-xl font-semibold mb-2">Your cart is empty</p>
            <p className="text-sm text-gray-400">
              Looks like you haven’t added anything yet.
            </p>
            <button
              onClick={() => navigate("/collection")}
              className="mt-4 px-4 py-2 border border-gray-300 rounded hover:bg-black hover:text-white transition"
            >
              Continue Shopping
            </button>
          </div>
      ) : (
        <>
          <div className="text-2xl mb-3">
            <Title text1={"My"} text2={"Cart"} />
          </div>
          <div>
            {cartData.map((item, index) => {
              const productData = products.find(
                (product) => product._id.toString() === item.id.toString()
              );

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
                  <div className="flex items-center gap-8">
                    <input
                      className="max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 border border-gray-300 bg-gray-50"
                      type="number"
                      defaultValue={item.quantity}
                      min={0}
                      max={100}
                      onChange={(e) =>
                        handleQuantityChange(item.id, item.size, e.target.value)
                      }
                    />
                    <MdDeleteForever
                      className="cursor-pointer w-4 sm:w-6 h-4 sm:h-6 hover:text-red-500"
                      onClick={() =>
                        handleDeleteItem(item.id, item.size, item.quantity)
                      }
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-end mt-10">
            <CartTotal />
          </div>
        </>
      )}
    </div>
  );
}

export default Cart