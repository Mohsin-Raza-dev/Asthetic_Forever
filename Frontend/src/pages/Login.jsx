import React, { useState } from 'react'
import Title from '../components/Title'
import NewsLetter from '../components/NewsLetter';

const Login = () => {
  const [currentState, setCurrentState] = useState('Sign Up');

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className="border-t ">
      <form
        type="submit"
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800 "
      >
        <div className="inline-flex gap-2 items-center mb-3 mt-10">
          <p className="prata-regular text-3xl sm:text-4xl">{currentState}</p>
          <hr className="w-8 sm:w-12 h-[2px] bg-black" />
        </div>
        {currentState === "Sign Up" && (
          <input
            type="text"
            placeholder="Name"
            className="w-full sm:flex-1 outline-none px-4 py-2 border border-gray-400 "
            required
          />
        )}
        <input
          type="text"
          placeholder="Email"
          className="w-full sm:flex-1 outline-none px-4 py-2 border border-gray-400 "
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full sm:flex-1 outline-none px-4 py-2 border border-gray-400 "
          required
        />
        <div className="flex justify-between text-sm w-full mt-[-8px]">
          {currentState === "Login" ? (
            <>
              <p>
                <span className="cursor-pointer text-gray-600">
                  Forgot Password?
                </span>
              </p>
              <p
                className="cursor-pointer text-gray-600"
                onClick={() => setCurrentState("Sign Up")}
              >
                Don't have an account?
              </p>
            </>
          ) : (
            <p
              className="w-full text-gray-600 flex justify-end"
              onClick={() => setCurrentState("Login")}
            >
              <span className='cursor-pointer'>Already have an account?</span>
            </p>
          )}
        </div>
        <button className="bg-black text-white px-8 py-2 cursor-pointer font-light mt-4">
          {currentState === "Sign Up" ? "Sign Up" : "Sign In"}
        </button>
      </form>
      <div className="pt-60">
        <NewsLetter />
      </div>
    </div>
  );
}

export default Login