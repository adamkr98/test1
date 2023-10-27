import React, { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import { getDatabase, ref, child, get } from "firebase/database";

import ProfileBuyer from "./ProfileBuyer"
import ProfileSeller from "./ProfileSeller";
import { Context } from '../Context/AuthContext'; 


const Signin = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const auth = getAuth()
    const navigate = useNavigate();

    const { user } = useContext(Context);

    let userID;
    let userRole;

    const dbRef = ref(getDatabase());

    


    async function handleSignIn(e){
        e.preventDefault();

    signInWithEmailAndPassword(auth,email,password)
    .then((user) => {
        userID = user.user.uid;
        
        
        get(child(dbRef, `users/${userID}`)).then((snapshot) => {
            if (snapshot.exists()) {
              let userData= snapshot.val();
    
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



        console.log(userID)
        
        //...
    })
    .catch((error) => {
        // Error
        console.log(error)
        alert('The email or/and password are incorrect!')
    })
    }

    return (
    <div className="w-full h-[75vh] flex justify-center items-center mt-[5vh]">
        <div className="w-[40%]">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure asperiores obcaecati odio impedit possimus, dolor quos dicta molestias amet, aperiam aliquid quas, dolores fugit libero placeat vel eaque fuga dolore.</p>
        </div>
        <div className="bg bg-[#588157] w-[40%] flex justify-center items-center rounded-md">
      
            <div className="w-2/3 h-[60vh] flex flex-col items-center justify-center">

            <h1 className="text-white text-xl">Hello Again!</h1>

                <form action="#" className="w-[90%] flex flex-col items-center pt-4">

                    <div className="w-full h-fit flex flex-col items-center">

                        <input onChange={(e) => {setEmail(e.target.value)}} type="text" placeholder="Email" className="bg bg-white text-black placeholder-[#2d6a4f] w-[90%] h-[2.5rem] mb-4 pl-4" />
                        <input onChange={(e) => {setPassword(e.target.value)}} type="text" placeholder="Password" className="bg bg-white text-black placeholder-[#2d6a4f] w-[90%] h-[2.5rem] mb-4 pl-4" />
                        <button onClick={(e) => {handleSignIn(e)}} className="bg bg-[#d4d700] text-white rounded-md w-[30%] pt-2 pb-2" >Sign In</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Signin;