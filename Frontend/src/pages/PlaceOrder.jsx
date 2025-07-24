import React from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal';
import PaymentMethod from '../components/PaymentMethod';

const PlaceOrder = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px] ">
        <div className=" text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input
            type="text"
            name="firstname"
            id="firstname"
            className="border border-gray-300 p-2 rounded py-1.5 px-3.5 w-full"
            placeholder="First Name"
          />
          <input
            type="text"
            name="lastname"
            id="lastname"
            className="border border-gray-300 p-2 rounded py-1.5 px-3.5 w-full"
            placeholder="Last Name"
          />
        </div>
        <input
          type="email"
          name="email"
          id="email"
          className="border border-gray-300 p-2 rounded py-1.5 px-3.5 w-full"
          placeholder="Email Address"
        />
        <input
          type="text"
          name="street"
          id="street"
          className="border border-gray-300 p-2 rounded py-1.5 px-3.5 w-full"
          placeholder="Street Address"
        />
        <div className="flex gap-3">
          <input
            type="text"
            name="city"
            id="city"
            className="border border-gray-300 p-2 rounded py-1.5 px-3.5 w-full"
            placeholder="City"
          />
          <input
            type="text"
            name="state"
            id="state"
            className="border border-gray-300 p-2 rounded py-1.5 px-3.5 w-full"
            placeholder="State"
          />
        </div>

        <div className="flex gap-3">
          <input
            type="text"
            name="zipcode"
            id="zipcode"
            className="border border-gray-300 p-2 rounded py-1.5 px-3.5 w-full"
            placeholder="Zip Code"
          />
          <input
            type="text"
            name="country"
            id="country"
            className="border border-gray-300 p-2 rounded py-1.5 px-3.5 w-full"
            placeholder="Country"
          />
        </div>
        <input
          type="text"
          name="phone"
          id="phone"
          className="border border-gray-300 p-2 rounded py-1.5 px-3.5 w-full"
          placeholder="Phone Number"
        />
      </div>
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <PaymentMethod />
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder