import React, { useState, useEffect, useRef } from 'react';
import Login from './Routes/Signin';
import SignIn from './Routes/Signup'; 
import { Link,  } from 'react-router-dom';
import {getAuth, signOut, onAuthStateChanged} from 'firebase/auth'



const Navbar = () => {

  
  const profile = useRef();

  const [registerLoginVisible, setRegisterLoginVisible] = useState(true)
  const [showProfile, setShowProfile] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);

  window.document.addEventListener('click', (event) => {
    if(event.target.innerText != "profile") {
      setShowDropDown(false)
    }
  })

  const auth = getAuth()
  async function handleSignOut(){
      try {
          await signOut(auth);
          setShowDropDown(false)
          
      } catch (error) {
          console.log(error)
      }
  }

  useEffect(() => {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setRegisterLoginVisible(false);
      } else {
        setRegisterLoginVisible(true);
      }
    });
  }, []);

  useEffect(() => {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setShowProfile(true);
      } else {
        setShowProfile(false);
      }
    });
  }, [])


  const showDropDownMenu = () => {
      setShowDropDown(true)
  }
  

  

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
          {/* {!registerLoginVisible && (
            <button className='mr-4' onClick={() => {handleSignOut()}}>Sign Out</button>
          )} */}
        
          {showProfile && (
            <p className='w-[4rem]' onClick={() => {showDropDownMenu()}}>profile</p>
          )}

          {showDropDown && (
            <div className='w-full absolute'>
              <div className='w-full h-[50vh] bg bg-white mt-[14vh] flex flex-col items-center'>
                <div className='w-full h-[2.5rem] text-center pt-4 pb-8 border border-b-2 hover:bg hover:bg-gray-200 cursor-pointer'>
                  <Link to="/profile" ref={profile}>
                    Profile
                  </Link>
                </div>
                <div className='w-full h-[2.5rem] text-center pt-4 pb-8 border border-b-2 hover:bg hover:bg-gray-200 cursor-pointer'>
                  <p onClick={() => {handleSignOut()}}>LogOut</p>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
};

export default Navbar;
