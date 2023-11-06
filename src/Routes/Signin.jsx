import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../Context/AuthContext';
import { getDatabase, ref, get } from 'firebase/database';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const userCredential = await signIn(email, password);
      
      const user = userCredential.user;

      const database = getDatabase();
      const userRef = ref(database, `users/${user.uid}`);
      const snapshot = await get(userRef);

      if(snapshot.exists()) {
        const userData = snapshot.val();
        const userRole = userData.role;

        if (userRole === "Seller") {
          navigate('/profileSeller');
          
        } else if (userRole === "Buyer") {
          navigate('/profileBuyer');
        } else {
          console.log('Role not found!');
        }

      } else {
        console.log('User data not found!');
      }
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };
    

    return (
    <div className="xs:w-full xs:flex sm:w-full sm:flex sm:justify-center lg:w-full xs:h-[80vh] lg:h-[75vh] lg:flex  lg:justify-center lg:items-center lg:mt-[5vh]">
        <div className="xs:hidden sm:w-[90%] lg:w-[40%] sm:flex md:flex lg:items-center md:items-center lg:flex">
          <div className="w-full h-[80vh] bg-registrationImage bg-cover">
          
          </div>
        </div>
        
        <div className="bg bg-[#588157] xs:w-full xs:h-[80vh] lg:w-[40%] flex justify-center xs:items-start items-center lg:rounded-r-md">
      
            <div className="xs:w-[90%] w-2/3 h-[60vh] flex flex-col items-center justify-center">

            <h1 className="text-white text-xl">Hello Again!</h1>

                <form onSubmit={handleSubmit} action="#" className="w-full flex flex-col items-center pt-4">

                    <div className="xs:w-full h-fit flex flex-col items-center">

                        <input onChange={(e) => {setEmail(e.target.value)}} type="text" placeholder="Email" className="bg bg-white text-black placeholder-[#2d6a4f] w-[90%] h-[2.5rem] mb-4 pl-4" />
                        <input onChange={(e) => {setPassword(e.target.value)}} type="text" placeholder="Password" className="bg bg-white text-black placeholder-[#2d6a4f] w-[90%] h-[2.5rem] mb-4 pl-4" />
                        <button onClick={(e) => {handleSubmit(e)}} className="bg bg-[#d4d700] text-white rounded-md w-[30%] pt-2 pb-2" >Sign In</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Signin;