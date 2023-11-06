import { signOut,getAuth } from "firebase/auth"
import React, { useRef, useState } from 'react';
import { Link } from "react-router-dom";


export function Home(){
    // const auth = getAuth()
    // async function handleSignOut(){
    //     try {
    //         await signOut(auth);
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    const [showSignInForm, setShowSignInForm] = useState(false);


    const handleJoinsUsClick = () => {
        setShowSignInForm(true);
    };


    const closeSignInForm = () => {
        setShowSignInForm(false);
    };
 /*bg bg-[#606C38]*/ 

    return (
    <div>
        <div className='w-full h-fit flex flex-col contrast-70'>
            
        <div className='w-full h-[70vh] bg-cover bg-no-repeat bg-publicPageBg flex flex-col justify-center items-center'>
            <p className='w-fit h-fit text-white text-[3rem] mb-8'>
                Your journey begins Here!
            </p>
            <Link to="/register">
                <button onClick={handleJoinsUsClick} className='border-2 border-white text-white text-xl pt-3 pb-3 pl-5 pr-5 rounded-md hover:bg-white hover:text-[#606C38]'>
                    
                    Join Us!
                
                </button>
            </Link>
        </div>

            <div className="w-full flex flex-col items-center">
                <p className="w-fit text-[##293E39] text-[2rem] mt-12 mb-12">
                    Who we ARE?       
                </p>
                <p className="w-1/2 text-center text-lg">
                Welcome to FoodMates - Where Community and Fresh Food Unite!<br />

                At FoodMates, we're more than just an online marketplace. We're a vibrant community hub, connecting local farmers, artisans, and food lovers in a shared celebration of fresh, locally sourced produce.

                
                </p>
                <h2 className="text-[2rem] mt-12 mb-12">
                    A place for local Producers and Consumers
                </h2>

                <p className="w-1/2 text-center text-lg mb-12">
                A Gathering Place for Local Producers:
                Local farmers, fishermen, and culinary artisans are at the heart of FoodMates. They proudly showcase their farm-fresh vegetables, fruits, meat, and fish, creating a direct link between you and the flavors of your region.<br />
                
                </p>
                <p className="w-1/2 text-center text-lg mb-12">
                    A Community of Food Enthusiasts:
                    For those who cherish the connections between food and community, FoodMates is a virtual meeting point. Discover a wide array of offerings, engage in lively discussions, and take part in local food events. By supporting local producers, you become a vital part of the community's culinary tapestry.

                </p>
                <p className="w-1/2 text-center text-lg">
                Experience the unity of community and fresh, local flavors at FoodMates. Join us now to support local businesses, savor the community spirit, and be part of the local food movement!
                </p>
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