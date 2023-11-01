import React, { useState, useContext, useEffect } from "react"
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { getDatabase, set, ref, child, get } from 'firebase/database'
import { useNavigate } from "react-router-dom"
import { Context } from '../Context/AuthContext';
import { storage } from '../fbconfig'
import { ref as sRef } from 'firebase/storage';


import ProfileBuyer from "./ProfileBuyer"
import ProfileSeller from "./ProfileSeller";
import { uploadBytes } from "firebase/storage";



const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [role, setRole] = useState('Buyer')
  const [image, setImage] = useState(null);

  let userID;

  const dbRef = ref(getDatabase());

  const auth = getAuth()
  const navigate = useNavigate()

  const writeUserData = (userId, username, email, role) => {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
      username: username,
      email: email,
      role: role,


    })
  }

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };


  async function handleSignUp(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        writeUserData(user.user.uid, username, email, role);
        
        alert("You're registered!")

        if (image !== null) {
          console.log(image);
          const storageRef = sRef(storage, `/profilePicture/${image.name}`);
          uploadBytes(storageRef, image)
            .then(() => {
              console.log('Image uploaded successfully');
            })
            .catch((error) => {
              console.error('Error uploading image:', error);
             
            });
        }

        userID = user.user.uid;


        get(child(dbRef, `users/${userID}`)).then((snapshot) => {
          if (snapshot.exists()) {
            let userData = snapshot.val();

            const role = userData.role
            console.log(role);

            if (role === "Buyer") {
              navigate('/categories')
            } else if (role === 'Seller') {
              navigate('/profileSeller')
            } else {
              console.error("role doesn't exist!!");
            }

          } else {
            console.log("No data available");
          }
        }).catch((error) => {
          console.error(error);
        });
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (



    <div className="w-full h-[75vh] flex justify-center items-center mt-[5vh]">
      <div className="w-[40%]">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure asperiores obcaecati odio impedit possimus, dolor quos dicta molestias amet, aperiam aliquid quas, dolores fugit libero placeat vel eaque fuga dolore.</p>
      </div>
      <div className="bg bg-[#588157] w-[40%] flex justify-center items-center rounded-md">

        <div className="w-2/3 h-[60vh] flex flex-col items-center justify-center">

          <h1 className="text-white text-xl">Nice to meet YOU!</h1>

          <form action="#" className="w-[90%] flex flex-col items-center pt-4">

            <div className="w-full h-fit flex flex-col items-center">

              <input onChange={(e) => { setUsername(e.target.value) }} type="text" placeholder="Username" className="bg bg-white text-black placeholder-[#2d6a4f] w-[90%] h-[2.5rem] mb-4 pl-4" />
              <input onChange={(e) => { setEmail(e.target.value) }} type="text" placeholder="Email" className="bg bg-white text-black placeholder-[#2d6a4f] w-[90%] h-[2rem] mb-4 pl-4" />
              <input onChange={(e) => { setPassword(e.target.value) }} type="text" placeholder="Password" className="bg bg-white text-black placeholder-[#2d6a4f] w-[90%] h-[2.5rem] mb-4 pl-4" />
              <input type="text" placeholder="Password Confirmation" className="bg bg-white text-black placeholder-[#2d6a4f] w-[90%] h-[2rem] mb-4 pl-4" />
              <select name="" id="" onChange={(e) => { setRole(e.target.value) }} className="bg bg-white text-[#2d6a4f] placeholder-[#2d6a4f] w-[90%] h-[2rem] mb-8 pl-4">
                <option value="Buyer">Buyer</option>
                <option value="Seller">Seller</option>
              </select>
              <input type="file" onChange={handleImageChange} className="w-[90%] text-white" />

              <button onClick={(e) => { handleSignUp(e) }} className="bg bg-[#d4d700] text-white rounded-md w-[30%] pt-2 pb-2 mt-4" >Sign Up</button>

            </div>
          </form>
        </div>
      </div>
    </div>
  )

}

export default Signup;