import React from 'react'

const NewsLetter = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <div className="text-center">
      <p className="text-2xl sm:text-3xl font-medium text-gray-800">
        Subscribe now & get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        Join our newsletter and unlock exclusive deals, trends, and 20% off your
        first order!
          </p>
          <form onSubmit={handleSubmit} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border border-gray-400 pl-3'>
              <input type="text" placeholder='Enter your email id' className='w-full sm:flex-1 outline-none px-4 py-1 ' required />
              <button type='submit' className='bg-black text-white px-10 py-4 cursor-pointer'>SUBSCRIBE</button>
          </form>
    </div>
  );
}

export default NewsLetter