import React, { useContext, useState } from 'react'
import { getDatabase, ref, child, get } from "firebase/database";
import { getAuth, signOut } from 'firebase/auth'



import { Context } from '../Context/AuthContext'; 


export default function Profile() {

  const { user } = useContext(Context);

  const userID = user.uid;

  const dbRef = ref(getDatabase());

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  
get(child(dbRef, `users/${userID}`)).then((snapshot) => {
  if (snapshot.exists()) {
    let userData= snapshot.val();

    const userName = userData.username
    const email = userData.email
    const role = userData.role

    setUserName(userName)
    setEmail(email)
    setRole(role)
    // setUserName(username)
    console.log(userData);

  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});

const auth = getAuth()
  async function handleSignOut(){
      try {
          await signOut(auth);
          
      } catch (error) {
          console.log(error)
      }
  }
  

  return (
    // <div>
    //   User Name: {userName}
    // </div>
    
    <div className='w-full h-[80vh] flex justify-center items-center'>
      <div className='w-[90%] h-[70vh] flex'>
        <div className='w-[20%] h-full bg-[#588157]'>

          <div className='w-full h-[3rem] flex justify-center items-center'>
            <p className='w-fit text-xl text-white'>
              Credentials
            </p>
          </div>
          <div className='w-full h-[3rem] flex justify-center items-center'>
            <p className='w-fit text-xl text-white'>
              Purchased
            </p>
          </div>
          <div className='w-full h-[3rem] flex justify-center items-center'>
            <p className='w-fit text-xl text-white'>
              Favorites
            </p>
          </div>
          <div className='w-full h-[3rem] flex justify-center items-center'>
            <p className='w-fit text-xl text-white'>
              Messages
            </p>
          </div>
          <div className='w-full h-[3rem] flex justify-center items-center'>
            <p className='w-fit text-xl cursor-pointer text-white' onClick={() => {handleSignOut()}}>
              Logout
            </p>
          </div>
        </div>

        <div className='w-3/4 h-full flex'>

          <div className='w-full h-full flex flex-col items-center'>

            <div className='w-2/3 flex justify-center items-center mt-12'>

              <div className='w-1/3 h-[3rem] text-3xl flex justify-center mr-[20%]'>
              <input type="text" value={userName} />
              </div>

              <div className='border border-[green] border-4 w-[10rem] h-[10rem] rounded-full'>
              </div>
            </div>

            <div className='w-2/3 h-[14rem] flex flex-col justify-around mt-10'>

              <input type="text" value={email} className='h-[2.5rem] w-[35%] text-xl bg bg-gray-100 flex pl-2' />

              <input type="text" placeholder="password" className='h-[2.5rem] w-[35%] bg bg-gray-100 flex pl-2' />

              <p className='h-[2.5rem] w-[35%] bg bg-gray-100 flex items-center pl-2'>
                Role: {role}
              </p>

              <button className='border border-2 border-white-400 rounded-md w-[30%] h-[2.5rem] hover:bg hover:bg-green-300 hover:border-none font-bold '>
                Update
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
   
  )
}
