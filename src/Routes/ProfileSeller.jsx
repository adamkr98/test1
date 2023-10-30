import { React, useState, useRef } from 'react'
import { getAuth, signOut } from 'firebase/auth'


const ProfileSeller = () => {

    const ProductsBtn = useRef();
    const SalesBtn = useRef();
    const MessagesBtn = useRef();

    const [ MyProducts, setMyProducts ] = useState(true);
    const [ MySales, setMySales ] = useState(false);
    const [ MyMessages, setMyMessages ] = useState(false);

    const showContent = (event) => {
        let currentBtn = event.target.textContent;

        if(currentBtn === 'My PRODUCTS') {
            setMySales(false)
            setMyMessages(false)
            setMyProducts(true)
       } else if (currentBtn === 'My SALES') {
            setMyProducts(false)
            setMyMessages(false)
            setMySales(true)
       } else if (currentBtn === 'My MESSAGES') {
            setMyProducts(false)
            setMySales(false)
            setMyMessages(true)
       }
    }

    const auth = getAuth()
    async function handleSignOut(){
        try {
          await signOut(auth);
          
          
        } catch (error) {
          console.log(error)
        }
    }




    return (
        <div className='w-full h-[80vh] flex relative pt-[10vh]'>
           
                <div className='w-1/4 h-[80vh] z-0 flex flex-col items-center'>
                    <div className='w-[10rem] h-[10rem] rounded-full border border-green-700 mb-20'></div>

                    <p>
                        Name
                    </p>
                    <p onClick={() => {handleSignOut()}} className='cursor-pointer'>
                        Logout
                    </p>
                </div>

                <div className='w-3/4 flex flex-col'>
                    <div className='w-[35%] flex justify-around bg bg-red-400 mb-4'>
                        
                        <div onClick={showContent} className='w-[10rem] h-[5vh] bg bg-white active:bg-gray-100 flex justify-center items-center hover'>
                            <p className=''>
                                My PRODUCTS
                            </p>
                        </div>
                        <div onClick={showContent} className='w-[10rem] h-[5vh] bg bg-white active:bg-gray-100 flex justify-center items-center'>
                            <p className=''>
                                My SALES
                            </p>
                        </div>
                        <div onClick={showContent} className='w-[10rem] h-[5vh] bg bg-white active:bg-gray-100 flex justify-center items-center'>
                            <p className=''>
                                My MESSAGES
                            </p>
                        </div>
                    </div>

                {MyProducts && (
                    <div className='w-full h-[70vh] flex flex-wrap gap-5 overflow-y-scroll gap-20'>
                        
                        <div className='w-[22rem] h-[15rem] bg bg-red-400 flex'>

                        </div>
                        <div className='w-[22rem] h-[15rem] bg bg-red-400 flex'>

                        </div>
                        <div className='w-[22rem] h-[15rem] bg bg-red-400 flex'>

                        </div>
                        <div className='w-[22rem] h-[15rem] bg bg-red-400 flex'>

                        </div>
                        <div className='w-[22rem] h-[15rem] bg bg-red-400 flex'>

                        </div>
                        <div className='w-[22rem] h-[15rem] bg bg-red-400 flex'>

                        </div>
                        <div className='w-[22rem] h-[15rem] bg bg-red-400'>

                        </div>
                        <div className='w-[22rem] h-[15rem] bg bg-red-400'>

                        </div>
                        <div className='w-[22rem] h-[15rem] bg bg-red-400'>

                        </div>
                        <div className='w-[22rem] h-[15rem] bg bg-red-400'>

                        </div>
                        <div className='w-[22rem] h-[15rem] bg bg-red-400'>

                        </div>
                        <div className='w-[22rem] h-[15rem] bg bg-red-400'>

                        </div>
                        
                    </div>
                    )}

                {MySales && (
                    <div className='w-full h-[70vh] flex flex-wrap gap-5 overflow-y-scroll gap-20'>
                        
                        <div className='w-[22rem] h-[15rem] bg bg-green-400 flex'>
                            <p>sales</p>
                        </div>
                        <div className='w-[22rem] h-[15rem] bg bg-green-400 flex'>

                        </div>
                        <div className='w-[22rem] h-[15rem] bg bg-green-400 flex'>

                        </div>
                        <div className='w-[22rem] h-[15rem] bg bg-green-400 flex'>

                        </div>
                        <div className='w-[22rem] h-[15rem] bg bg-green-400 flex'>

                        </div>
                        <div className='w-[22rem] h-[15rem] bg bg-green-400 flex'>

                        </div>
                        <div className='w-[22rem] h-[15rem] bg bg-green-400'>

                        </div>
                        <div className='w-[22rem] h-[15rem] bg bg-green-400'>

                        </div>
                        <div className='w-[22rem] h-[15rem] bg bg-green-400'>

                        </div>
                        <div className='w-[22rem] h-[15rem] bg bg-green-400'>

                        </div>
                        <div className='w-[22rem] h-[15rem] bg bg-green-400'>

                        </div>
                        <div className='w-[22rem] h-[15rem] bg bg-green-400'>

                        </div>
                        
                    </div>
                    )}
                
                {MyMessages && (
                    <div className='w-full h-[70vh] flex overflow-y-scroll'>
                        <div className='w-1/4 h-[90vh] flex flex-col'>
                            <div className='w-[20rem] h-[3rem] border border-2 flex justify-center
                            items-center'>
                                <p>
                                    John Smith
                                </p>
                            </div>
                            <div className='w-[20rem] h-[3rem] border border-2 flex justify-center
                            items-center'>
                                <p>
                                    John Smith
                                </p>
                            </div>
                            <div className='w-[20rem] h-[3rem] border border-2 flex justify-center
                            items-center'>
                                <p>
                                    John Smith
                                </p>
                            </div>
                            <div className='w-[20rem] h-[3rem] border border-2 flex justify-center
                            items-center'>
                                <p>
                                    Sarah Johnson
                                </p>
                            </div>
                            <div className='w-[20rem] h-[3rem] border border-2 flex justify-center
                            items-center'>
                                <p>
                                    Christopher Jones
                                </p>
                            </div>
                            <div className='w-[20rem] h-[3rem] border border-2 flex justify-center
                            items-center'>
                                <p>
                                Christopher Jones
                                </p>
                            </div>
                            <div className='w-[20rem] h-[3rem] border border-2 flex justify-center
                            items-center'>
                                <p>
                                    Daniel Anderson
                                </p>
                            </div>
                            <div className='w-[20rem] h-[3rem] border border-2 flex justify-center
                            items-center'>
                                <p>
                                    Olivia Miller
                                </p>
                            </div>
                            <div className='w-[20rem] h-[3rem] border border-2 flex justify-center
                            items-center'>
                                <p>
                                    John Smith
                                </p>
                            </div>
                            <div className='w-[20rem] h-[3rem] border border-2 flex justify-center
                            items-center'>
                                <p>
                                    Sarah Johnson
                                </p>
                            </div>
                            <div className='w-[20rem] h-[3rem] border border-2 flex justify-center
                            items-center'>
                                <p>
                                    Christopher Jones
                                </p>
                            </div>
                            <div className='w-[20rem] h-[3rem] border border-2 flex justify-center
                            items-center'>
                                <p>
                                Christopher Jones
                                </p>
                            </div>
                            <div className='w-[20rem] h-[3rem] border border-2 flex justify-center
                            items-center'>
                                <p>
                                    Daniel Anderson
                                </p>
                            </div>
                            <div className='w-[20rem] h-[3rem] border border-2 flex justify-center
                            items-center'>
                                <p>
                                    Olivia Miller
                                </p>
                            </div>
                            <div className='w-[20rem] h-[3rem] border border-2 flex justify-center
                            items-center'>
                                <p>
                                    John Smith
                                </p>
                            </div>
                            <div className='w-[20rem] h-[3rem] border border-2 flex justify-center
                            items-center'>
                                <p>
                                    Sarah Johnson
                                </p>
                            </div>
                            <div className='w-[20rem] h-[3rem] border border-2 flex justify-center
                            items-center'>
                                <p>
                                    John Smith
                                </p>
                            </div>
                            <div className='w-[20rem] h-[3rem] border border-2 flex justify-center
                            items-center'>
                                <p>
                                    Sarah Johnson
                                </p>
                            </div>
                            
                            
                        </div>
                        <div className='w-3/4 flex flex-col justify-end'>
                            <div className='w-full bg bg-blue-600'>

                            </div>
                            <div className='w-[50%] pl-20 flex absolute b-0'>
                                <textarea className='w-[80%] h-[5rem] min-h-[5rem] border border-2 pl-4' type="text" />
                                <button className='w-[5rem] h-[3rem] rounded-sm ml-[1rem] bg bg-blue-400'>
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                )} 
                </div>
                
            </div>
    )
}

export default ProfileSeller;