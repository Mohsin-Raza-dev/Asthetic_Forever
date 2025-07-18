import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
    return (
      <div className="flex flex-col sm:flex-row justify-around gap-12 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
        <div>
          <img
            src={assets.exchange_icon}
            alt="exchange icon"
            className="w-12 mb-5 m-auto"
          />
          <h1 className="font-medium">Easy Exchange Policy</h1>
          <p className=" m-auto text-gray-400">
            We offer hassle free exchange policy
          </p>
        </div>
        <div>
          <img
            src={assets.quality_icon}
            alt="exchange icon"
            className="w-12 mb-5 m-auto"
          />
          <h1 className="font-medium">7 Days Return Policy</h1>
          <p className="m-auto text-gray-400">
            We provide 7 days free return policy
          </p>
        </div>
        <div>
          <img
            src={assets.support_img}
            alt="exchange icon"
            className="w-12 mb-5 m-auto"
          />
          <h1 className="font-medium">Best Customer Support</h1>
          <p className="m-auto text-gray-400">
            We provide 24/7 customer support
          </p>
        </div>
      </div>
    );
}

export default OurPolicy