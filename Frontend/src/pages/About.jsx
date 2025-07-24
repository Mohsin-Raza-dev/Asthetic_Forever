import React from 'react'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsLetter from '../components/NewsLetter';

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          alt="about image"
          className="w-full md:max-w-[450px]"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            At Aesthetic Forever, we are driven by the belief that beauty lies
            in the details. Our brand is dedicated to curating timeless pieces
            that blend modern design with effortless elegance. From fashion and
            accessories to lifestyle essentials, each item in our collection is
            thoughtfully selected to bring harmony, inspiration, and
            individuality into everyday living.
          </p>
          <p>
            What began as a passion for minimal, meaningful design has grown
            into a community of like-minded individuals who value quality over
            quantity and expression over trends. We strive to create a space
            where aesthetics are not just seen—they are felt, lived, and
            celebrated through intentional choices and enduring style.
          </p>
          <b className="text-gray-700">Our Mission</b>
          <p>
            Our mission is to inspire mindful living through beautifully crafted
            pieces that reflect simplicity, purpose, and authenticity. We aim to
            empower individuals to express their unique aesthetic while
            embracing sustainability, creativity, and timeless design in every
            aspect of their lifestyle.
          </p>
        </div>
      </div>
      <div className="text-2xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>QUALITY ASSURANCE:</b>
          <p className="text-gray-600">
            We Meticulously Select And Vet Each Product To Ensure It Meets Our
            Stringent Quality Standards.
          </p>
        </div>
        <div className="border border-t border-b border-gray-300  px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>CONVENIENCE:</b>
          <p className="text-gray-600">
            With Our User-Friendly Interface And Hassle-Free Ordering Process,
            Shopping Has Never Been Easier.
          </p>
        </div>
        <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>EXCEPTIONAL CUSTOMER SERVICE:</b>
          <p className="text-gray-600">
            Our Team Of Experts Is Here To Assist You The Way, Ensuring Your
            Satisfaction Is Our Top Priority.
          </p>
        </div>
      </div>
      <div className='pt-20'>
        <NewsLetter />
      </div>
    </div>
  );
}

export default About