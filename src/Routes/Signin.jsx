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
    <div className="w-full h-[75vh] flex justify-center items-center mt-[5vh]">
        <div className="w-[40%]">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure asperiores obcaecati odio impedit possimus, dolor quos dicta molestias amet, aperiam aliquid quas, dolores fugit libero placeat vel eaque fuga dolore.</p>
        </div>
        <div className="bg bg-[#588157] w-[40%] flex justify-center items-center rounded-md">
      
            <div className="w-2/3 h-[60vh] flex flex-col items-center justify-center">

            <h1 className="text-white text-xl">Hello Again!</h1>

                <form onSubmit={handleSubmit} action="#" className="w-[90%] flex flex-col items-center pt-4">

                    <div className="w-full h-fit flex flex-col items-center">

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