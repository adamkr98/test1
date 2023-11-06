import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from './Context/AuthContext';  
import { getDatabase, ref, get } from 'firebase/database';



const Navbar = () => {

  const [ userRole, setUserRole ] = useState('')
  const { user } = UserAuth();

  useEffect(() => {
    if (user) {
      const userId = user.uid;
      const database = getDatabase();
      const userRef = ref(database, `users/${userId}`);

      get(userRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            const userData = snapshot.val();
            setUserRole(userData.role);
          } else {
            console.log('User data does not exist.');
          }
        })
        .catch((error) => {
          console.error('Error getting user data:', error);
        });
    }
  }, [user]);






  return (
    <div className="xs:w-full xs:h-[10vh] xs:bg-white w-full h-[10vh] flex justify-center shadow sticky top-0 z-40">
      <div className="w-[30%] pl-2 pr-2 sm:w-[30%] md:w-[10%] flex justify-start">
        <p className="w-fit flex justify-center items-center">
          <p className='cursor-pointer'>foodMates</p>
        </p>
      </div>

      <div className="w-full flex justify-end">
        <ul className="w-[50%] flex justify-end">
          <li className="w-11 mr-8 flex justify-center items-center">About</li>
        </ul>

        {user ? (
          
          <>
            <Link to={'/profile' + `${userRole}`}>
              <div className='h-full flex items-center mr-4'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" class="w-12 h-12">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </Link>
       
          </>
        ) : (
          
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
      </div>
    </div>
  );
};

export default Navbar;
