import React from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal';
import PaymentMethod from '../components/PaymentMethod';

const PlaceOrder = () => {
  return (
    <div className="border-t pt-14">
      <div className="flex flex-col sm:flex-row justify-between">
        <div className="flex flex-col ">
          <div className=" text-xl sm:text-2xl">
            <Title text1={"DELIVERY"} text2={"INFORMATION"} />
          </div>
          <div className="flex flex-col mt-6">
            <form action="">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    className="border border-gray-300 p-2 rounded-sm"
                    placeholder="First Name"
                  />
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    className="border border-gray-300 p-2 rounded-sm"
                    placeholder="Last Name"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="border border-gray-300 p-2 rounded-sm"
                    placeholder="Email Address"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <input
                    type="text"
                    name="street"
                    id="street"
                    className="border border-gray-300 p-2 rounded-sm"
                    placeholder="Street Address"
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="flex flex-col gap-2">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      className="border border-gray-300 p-2 rounded-sm"
                      placeholder="City"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <input
                      type="text"
                      name="state"
                      id="state"
                      className="border border-gray-300 p-2 rounded-sm"
                      placeholder="State"
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="flex flex-col gap-2">
                    <input
                      type="text"
                      name="zipcode"
                      id="zipcode"
                      className="border border-gray-300 p-2 rounded-sm"
                      placeholder="Zip Code"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <input
                      type="text"
                      name="country"
                      id="country"
                      className="border border-gray-300 p-2 rounded-sm"
                      placeholder="Country"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="border border-gray-300 p-2 rounded-sm"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-10 flex flex-col">
          <CartTotal />
          <PaymentMethod />
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder