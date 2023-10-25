import { signOut,getAuth } from "firebase/auth"
import React, { useRef, useState } from 'react';
import { Link } from "react-router-dom";


export function Home(){
    const auth = getAuth()
    async function handleSignOut(){
        try {
            await signOut(auth);
        } catch (error) {
            console.log(error)
        }
    }

    const [showSignInForm, setShowSignInForm] = useState(false);


    const handleJoinsUsClick = () => {
        setShowSignInForm(true);
    };


    const closeSignInForm = () => {
        setShowSignInForm(false);
    };


    return (
    <div>
        <div className='w-full h-fit flex flex-col'>

<div className='w-full h-[40vh] bg bg-[#606C38]  flex flex-col justify-center items-center'>
    <p className='w-fit h-fit text-white text-3xl mb-8'>
        Your journey begins Here!
    </p>
    <Link to="/register">
        <button onClick={handleJoinsUsClick} className='border border-white text-white text-xl p-2 rounded-md hover:bg-white hover:text-[#606C38]'>
            
            Join Us!
        
        </button>
    </Link>
</div>

<div className='h-fit bg-[#f0f1f4] pt-8 flex flex-wrap justify-around items-center'>



    <section className='w-[20rem] h-[40vh] mb-8 bg bg-white flex flex-col justify-center items-center'>
        <img
            src="https://blog.gemfind.com/hs-fs/hubfs/ecommerce-subway-studio-malaysia%20(1).gif?width=744&height=496&name=ecommerce-subway-studio-malaysia%20(1).gif"
            alt="" className='w-[70%]'
        />
        <p>Select your role</p>
    </section>

    <section className='w-[20rem] h-[40vh] mb-8 bg bg-white flex flex-col justify-center items-center'>
        <img
            src="https://blog.gemfind.com/hs-fs/hubfs/ecommerce-subway-studio-malaysia%20(1).gif?width=744&height=496&name=ecommerce-subway-studio-malaysia%20(1).gif"
            alt="" className='w-[70%]'
        />
        <p>Select your role</p>
    </section>

    <section className='w-[20rem] h-[40vh] mb-8 bg bg-white flex flex-col justify-center items-center'>
        <img
            src="https://blog.gemfind.com/hs-fs/hubfs/ecommerce-subway-studio-malaysia%20(1).gif?width=744&height=496&name=ecommerce-subway-studio-malaysia%20(1).gif"
            alt="" className='w-[70%]'
        />
        <p>Select your role</p>
    </section>

</div>


{/* {showSignInForm && (
<div className="fixed top-0 left-0 w-full h-full bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
    <SignIn closeSignInModal={closeSignInForm} />
    
</div>
)} */}

</div>
</div>
    )}