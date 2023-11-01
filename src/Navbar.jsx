import React, { useState, useEffect, useRef, useContext } from 'react';
import Login from './Routes/Signin';
import SignIn from './Routes/Signup'; 
import { Link, useNavigate } from 'react-router-dom';
import {getAuth, signOut, onAuthStateChanged} from 'firebase/auth'
import { Context } from './Context/AuthContext';
import { getDatabase, ref, child, get } from "firebase/database";




const Navbar = () => {

  
  const profile = useRef();
  const { user } = useContext(Context)

  // const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [registerLoginVisible, setRegisterLoginVisible] = useState(true)
  const [showProfile, setShowProfile] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const [buyerProfile, setBuyerProfile] = useState(false);
  const [sellerProfile, setSellerProfile] = useState(false);
  const [role, setRole] = useState('');

  // useEffect(() => {
  //   const handleResize = () => {
  //     setScreenWidth(window.innerWidth);
  //   };

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);


  const navigate = useNavigate();

  window.document.addEventListener('click', (event) => {
    if(event.target.innerText != "profile") {
      setShowDropDown(false)
    }
  })

  useEffect(() => {
    
    if (user && user.role === 'Buyer') {
      setBuyerProfile(true);
    } else if (user && user.role === 'Seller') {
      setSellerProfile(true);
    } 
  }, [user]);

  // const auth = getAuth()
  // async function handleSignOut(){
  //     try {
  //         await signOut(auth);
  //         setShowDropDown(false)
          
  //     } catch (error) {
  //         console.log(error)
  //     }
  // }

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


 

  const dbRef = ref(getDatabase());

  useEffect(() => {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {

      const userID = user.uid;
      get(child(dbRef, `users/${userID}`)).then((snapshot) => {
        if (snapshot.exists()) {
          let userData= snapshot.val();
      
         
          let role = userData.role
      
          setRole(role)
          // setUserName(username)
          console.log(role);

          // if (user && role === "Buyer") {
          //   setShowProfile(true);

          // } else if (user && role === "Seller") {
          //   setSellerProfile(true);
          //   setBuyerProfile(false);
          // } else {
          //   setShowProfile(false);
          // }
          
          if (user) {
            let role = userData.role;
            setRole(role);
            if (role === "Buyer") {
              setShowProfile(true);
              setSellerProfile(false);

            } else if (role === "Seller") {
              setSellerProfile(true);
              setShowProfile(false);
            } else {
              setShowProfile(false);
            }
          }
      
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });

      
    });
  }, [])


  // const showDropDownMenu = () => {
  //     setShowDropDown(true)
  // }
  

  const LogoRoute = () => {

    if(user && role === "Buyer") {
      navigate('/categories')
    } else if (user && role === "Seller") {
      navigate('/profileSeller')
    }
     else {
      navigate('/')
    }
  }

  return (
    <>
      <div className="xs:w-full xs:h-[10vh] xs:bg-white w-full h-[10vh] flex justify-center shadow sticky top-0 z-40">
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
            
            <Link to="/profileBuyer">
             <div className='h-full flex items-center mr-4'>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" class="w-12 h-12">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
             </div>

              {/* <p className='w-[4rem] h-full flex items-center mr-4' onClick={() => {showDropDownMenu()}}>profile</p> */}
            </Link>
          )}

          {sellerProfile && (
              <Link to="/profileSeller">
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
