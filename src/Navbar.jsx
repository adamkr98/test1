import React, { useState, useEffect } from 'react';
import Login from './Routes/Signin';
import SignIn from './Routes/Signup'; 
import { Link } from 'react-router-dom';
import {getAuth, signOut, onAuthStateChanged} from 'firebase/auth'


const Navbar = () => {

  const auth = getAuth()
  async function handleSignOut(){
      try {
          await signOut(auth);
      } catch (error) {
          console.log(error)
      }
  }


  const [registerLoginVisible, setRegisterLoginVisible] = useState(true)

  const hideLoginSignin = (setRegisterLoginVisible) => {
    setRegisterLoginVisible(false)
  }

  useEffect(() => {
    const auth = getAuth();

    // Use onAuthStateChanged to listen for changes in the user's authentication status.
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is logged in, so hide the "Register" and "Login" buttons.
        setRegisterLoginVisible(false);
      } else {
        // User is not logged in, so show the "Register" and "Login" buttons.
        setRegisterLoginVisible(true);
      }
    });
  }, []);

  return (
    <>
      <div className="w-full h-[10vh] flex justify-center shadow">
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

          {registerLoginVisible && (
            <div className="w-[8rem] mr-4 flex justify-around">
              <div className="w-full flex justify-around items-center">
                <button className="w-fit p-2 font-bold rounded-md border-2 border-transparent hover:border-2 hover:border-gray-400">
                  <Link to="/register">
                    SignUp
                  </Link>
                </button>
                <button className="w-fit p-2 rounded-md border-2 border-transparent hover:border-2 hover:border-gray-400">
                  <Link to="/signin">
                    LogIn
                  </Link>
                  </button>
              </div>
            </div>
          )}
          {!registerLoginVisible && (
            <button className='mr-4' onClick={() => {handleSignOut()}}>Sign Out</button>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
