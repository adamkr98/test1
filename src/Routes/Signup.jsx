import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../Context/AuthContext';
import { getDatabase, ref, set, get } from 'firebase/database';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState(''); 
    const [role, setRole] = useState('Buyer'); 
    const [showError, setShowError] = useState(false); 
    const [error, setError] = useState('');


    const { createUser } = UserAuth();
    const navigate = useNavigate();
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      const userCredential = await createUser(email, password);

      const { user } = userCredential;
      const uid = user.uid;    
      
      const database = getDatabase();
      const userRef = ref(database, `users/${uid}`);
      const snapshot = await get(userRef);
      const userData = {
        email,
        username,
        role,
      };
      await set(userRef, userData);

      const userRole = role;
     
      if (userRole === "Seller") {
        navigate('/profileSeller');
      } else if (userRole === "Buyer") {
        navigate('/profileBuyer');
      } else {
        console.log('Role not found!');
      }
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (



    <div className="w-full h-[75vh] flex justify-center items-center mt-[5vh]">
      <div className="w-[40%] h-[60vh] bg-registrationImage bg-cover">
        
      </div>
      <div className="bg bg-[#588157] w-[40%] flex justify-center items-center rounded-r-md">

        <div className="w-2/3 h-[60vh] flex flex-col items-center justify-center">

          <h1 className="text-white text-xl">Nice to meet YOU!</h1>

          <form onSubmit={handleSubmit} action="#" className="w-[90%] flex flex-col items-center pt-4">

            <div className="w-full h-fit flex flex-col items-center">

              <input onChange={(e) => { setUsername(e.target.value) }} type="text" placeholder="Username" className="bg bg-white text-black placeholder-[#2d6a4f] w-[90%] h-[2.5rem] mb-4 pl-4" />
              <input onChange={(e) => { setEmail(e.target.value) }} type="text" placeholder="Email" className="bg bg-white text-black placeholder-[#2d6a4f] w-[90%] h-[2rem] mb-4 pl-4" />
              <input onChange={(e) => { setPassword(e.target.value) }} type="text" placeholder="Password" className="bg bg-white text-black placeholder-[#2d6a4f] w-[90%] h-[2.5rem] mb-4 pl-4" />
              <input type="text" placeholder="Password Confirmation" className="bg bg-white text-black placeholder-[#2d6a4f] w-[90%] h-[2rem] mb-4 pl-4" />
              <select name="" id="" onChange={(e) => { setRole(e.target.value) }} className="bg bg-white text-[#2d6a4f] placeholder-[#2d6a4f] w-[90%] h-[2rem] mb-8 pl-4">
                <option value="Buyer">Buyer</option>
                <option value="Seller">Seller</option>
              </select>
              <input type="file" className="w-[90%] text-white" />
              {showError && (
              <p>{error}</p>
              )}

              <button  className="bg bg-[#d4d700] text-white rounded-md w-[30%] pt-2 pb-2 mt-4" >Sign Up</button>

            </div>
          </form>
        </div>
      </div>
    </div>
  )

}

export default Signup;