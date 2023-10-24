import React, { useState } from 'react';
import Login from './Routes/Signin';
import SignIn from './Routes/Signup'; 
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <>
      <div className="border border-red-400 w-full h-[10vh] flex justify-center shadow">
        <div className="w-[30%] pl-2 pr-2 sm:w-[30%] md:w-[10%] flex justify-start">
          <p className="w-fit flex justify-center items-center">
            <Link to="/">foodMates</Link>
          </p>
        </div>

        <div className="w-full flex justify-end">
          <ul className="w-[50%] flex justify-end">
            <li className="w-11 mr-8 flex justify-center items-center">About</li>
            <li className="w-11 mr-8 flex justify-center items-center">Contact</li>
          </ul>

          
            <div className="w-[8rem] mr-4 flex justify-around">
              <div className="w-full flex justify-around items-center">
                <button className="w-fit p-2 font-bold rounded-md border-2 border-transparent hover:border-2 hover:border-gray-400">
                  SignIn
                </button>
                <button className="w-fit p-2 rounded-md border-2 border-transparent hover:border-2 hover:border-gray-400">Login</button>
              </div>
            </div>
        
        </div>
      </div>
    </>
  );
};

export default Navbar;
