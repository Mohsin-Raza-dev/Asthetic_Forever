import React, { useState } from "react";
import Title from "./Title";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const PaymentMethod = () => {
  const [selectedMethod, setSelectedMethod] = useState("");

  const handleChange = (e) => {
    setSelectedMethod(e.target.value);
  };

  return (
    <div className="my-10 pt-10">
      <div>
        <Title text1="PAYMENT" text2="METHOD" />
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4">
        
        <label
          className={`flex items-center gap-2 border px-4 py-3 cursor-pointer rounded ${
            selectedMethod === "razorpay"
              ? "border-blue-500 bg-blue-50"
              : "border-gray-400"
          }`}
        >
          <input
            type="radio"
            name="payment"
            value="razorpay"
            checked={selectedMethod === "razorpay"}
            onChange={handleChange}
          />
          <img className="w-20" src={assets.razorpay_logo} alt="Razorpay" />
        </label>

        {/* Stripe */}
        <label
          className={`flex items-center gap-2 border px-4 py-3 cursor-pointer rounded ${
            selectedMethod === "stripe"
              ? "border-blue-500 bg-blue-50"
              : "border-gray-400"
          }`}
        >
          <input
            type="radio"
            name="payment"
            value="stripe"
            checked={selectedMethod === "stripe"}
            onChange={handleChange}
          />
          <img className="w-[38px]" src={assets.stripe_logo} alt="Stripe" />
        </label>

        {/* Cash on Delivery */}
        <label
          className={`flex items-center gap-2 border px-4 p-[10px] cursor-pointer rounded ${
            selectedMethod === "cod"
              ? "border-blue-500 bg-blue-50"
              : "border-gray-400"
          }`}
        >
          <input
            type="radio"
            name="payment"
            aria-label="Cash on Delivery"
            value="cod"
            checked={selectedMethod === "cod"}
            onChange={handleChange}
          />
          <p className="text-gray-500 text-sm">Cash on Delivery</p>
        </label>
          </div>
          <div className="flex justify-end">
                <Link to="/orders" className="bg-black text-white px-10 py-3 cursor-pointer mt-4 ">Place Order</Link>
          </div>
    </div>
  );
};

export default PaymentMethod;
