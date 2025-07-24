import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetter from '../components/NewsLetter';

const Contact = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.contact_img}
          alt="about image"
          className="w-full md:max-w-[450px]"
        />
        <div className="flex flex-col gap-6 md:w-2/4 text-gray-600 mt-6">
          <b className="text-gray-600 text-2xl font-medium">OUR STORE</b>
          <p>
            <p>456 Fashion Ave, NY 10018, USA</p><br />
            <p>Tel: +92 123 456 789</p>
            <p>Email: astheticforever@gmail.com</p>
          </p>
          <b className="text-gray-600 text-2xl font-medium">
            CAREERS AT ASTHETIC FOREVER
          </b>
          <p>
            Learn more about our career opportunities and how you can join our
            team.
          </p>
          <button className=" w-50 px-10 py-4 cursor-pointer border hover:border-black hover:text-black">
            Explore Jobs
          </button>
        </div>
      </div>
      <div className='pt-50'>
        <NewsLetter />
      </div>
    </div>
  );
}

export default Contact