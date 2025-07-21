import React, { useContext, useMemo } from "react";
import Title from "./Title";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const CartTotal = () => {
  const { cartItems, products, deliver_fee, currency } =
    useContext(ShopContext);


  const subtotal = useMemo(() => {
    let total = 0;
    for (let productId in cartItems) {
      const product = products.find((p) => p._id.toString() === productId);
      if (product) {
        for (let size in cartItems[productId]) {
          total += product.price * cartItems[productId][size];
        }
      }
    }
    return total;
  }, [cartItems, products]);

  const shipping = subtotal > 0 ? deliver_fee : 0;
  const total = subtotal + shipping;

    return subtotal > 0 ? (
                  <div className="flex flex-col justify-end mt-14 ">
      <div className="flex text-xl sm:text-2xl font-semibold">
        <Title text1="CART" text2="TOTAL" />
      </div>

      <div className="flex flex-col gap-4 mt-4">
        <div className="flex justify-between">
          <p className="text-gray-700 mt-2">Subtotal</p>
          <p className="text-gray-600 mt-2">
            {currency}
            {subtotal.toFixed(2)}
          </p>
        </div>

        <div className="flex justify-between border-t border-gray-300">
          <p className="text-gray-700 mt-2">Shipping</p>
          <p className="text-gray-600 mt-2">
            {currency}
            {shipping.toFixed(2)}
          </p>
        </div>

        <div className="flex justify-between border-t border-gray-300">
          <p className="text-gray-700 font-medium mt-2">Total</p>
          <p className="text-gray-600 mt-2 font-medium">
            {currency}
            {total.toFixed(2)}
          </p>
        </div>
      </div> 
    </div>
    ) : null;
};

export default CartTotal;
