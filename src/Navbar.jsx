import React, { useState, useEffect, useRef, useContext } from 'react';
import Login from './Routes/Signin';
import SignIn from './Routes/Signup'; 
import { Link, useNavigate } from 'react-router-dom';
import {getAuth, signOut, onAuthStateChanged} from 'firebase/auth'
import { Context } from './Context/AuthContext';



const Navbar = () => {

  
  const profile = useRef();
  const { user } = useContext(Context)

  const [registerLoginVisible, setRegisterLoginVisible] = useState(true)
  const [showProfile, setShowProfile] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);

  const navigate = useNavigate();

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
  

  const LogoRoute = () => {

    if(user) {
      navigate('/categories')
    }
  }

  return (
    <>
      <div className="w-full h-[10vh] flex justify-center shadow">
        <div className="w-[30%] pl-2 pr-2 sm:w-[30%] md:w-[10%] flex justify-start">
          <p className="w-fit flex justify-center items-center">
            <p onClick={LogoRoute} className='cursor-pointer'>foodMates</p>
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

            <Link to="/profile">
             <div className='h-full flex items-center mr-4'>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" class="w-12 h-12">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
             </div>

              {/* <p className='w-[4rem] h-full flex items-center mr-4' onClick={() => {showDropDownMenu()}}>profile</p> */}
            </Link>
          )}

          {/* {showDropDown && ( */}
            {/* <div className='w-1/5 h-fit absolute rounded-sm'>
              <div className='w-full h-[50vh] bg bg-white mt-[14vh] shadow-xl flex flex-col items-center'>
              
                <div className='w-full h-[2.5rem] text-center pt-4 pb-8 border border-b-2 hover:bg hover:bg-gray-200 cursor-pointer'>
                  <Link to="/profile" ref={profile}>
                      <p className='w-full'>Profil</p>
                  </Link>
                </div>
                
                <div className='w-full h-[2.5rem] text-center pt-4 pb-8 border border-b-2 hover:bg hover:bg-gray-200 cursor-pointer'>
                  <p onClick={() => {handleSignOut()}}>LogOut</p>
                </div>
              </div>
            </div> */}
          {/* )} */}

        </div>
      </div>
    </>
  );
};

export default Navbar;
