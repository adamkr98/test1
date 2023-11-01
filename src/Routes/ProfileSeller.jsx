import { React, useState, useRef } from 'react'
import { getAuth, signOut } from 'firebase/auth'
import { storage } from '../fbconfig'
import { ref as sRef } from 'firebase/storage';


const ProfileSeller = () => {


    const ProductsBtn = useRef();
    const SalesBtn = useRef();
    const MessagesBtn = useRef();
    // const ChangeUserName = useRef();

    const [ MyProducts, setMyProducts ] = useState(true);
    const [ MySales, setMySales ] = useState(false);
    const [ MyMessages, setMyMessages ] = useState(false);
    const [ MyCredentials, setMyCredentials ] = useState(false);
    const [ Categories, setCategories ] = useState(false);
    const [ NewProduct, setNewProduct ] = useState(false);
    const [ logoutVisible, setLogoutVisible ] = useState(false);
    const [ tabsVisible, setTabsVisible ] = useState(false);
    //need to set the variable to retain the innerWidth/mobileDevice-desktop version!!!!!
    const [image, setImage] = useState(null);

  
    let ChangeUserName;

    const ChangeCredentials = () => {
        ChangeUserName = true
    }

    const addProduct = () => {
        setNewProduct(true)
    }


    const showContent = (event) => {
        let currentBtn = event.target.textContent;

        if(currentBtn === 'My PRODUCTS') {
            setMyProducts(true)
            setCategories(true)
            setMySales(false)
            setMyMessages(false)
            setMyCredentials(false)
            
       } else if (currentBtn === 'My SALES') {
            setMyProducts(false)
            setMyMessages(false)
            setMySales(true)
            setMyCredentials(false)
            setCategories(false)
            
       } else if (currentBtn === 'My MESSAGES') {
            setMyProducts(false)
            setCategories(false)
            setMySales(false)
            setMyMessages(true)
            setMyCredentials(false)

       } else if (currentBtn === 'My CREDENTIALS') {
            setMyProducts(false)
            setCategories(false)
            setMySales(false)
            setMyMessages(false)
            setMyCredentials(true)
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

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
      };

    if (image !== null) {
        console.log(image);
        const storageRef = sRef(storage, `/profileSeller/${image.name}`);
        uploadBytes(storageRef, image)
          .then(() => {
            console.log('Image uploaded successfully');
          })
          .catch((error) => {
            console.error('Error uploading image:', error);
           
          });
      }

      


    return (
        // <div className="sm:w-3/4 sm:h-[20vh] sm:flex sm:flex-col md:w-full md:h-[80vh] md:flex relative pt-[10vh] border border-red-400">
        <div className='xs:w-full xs:h-fit xs:flex xs:flex-col xs:items-center lg:w-full lg:h-[70vh] lg:flex-row lg:mt-[10vh]'>
           
                {/* <div className='sm:w-3/4 sm:h-[10vh] md:w-1/4 md:h-[80vh] md:z-0 md:flex md:flex-col md:ml-24'> */}
                <div className='xs:3/4 xs:flex xs:flex-col xs:items-center lg:w-1/4 lg:h-[60vh] lg:flex'>

                    <div className='xs:w-[10rem] xs:h-[10rem] xs:mt-4 xs:mb-4 md:w-[10rem] md:h-[10rem] rounded-full border border-green-700 md:mb-20'></div>

                    <p>
                        UserName
                    </p>

                    <p className='w-fit'>
                        Christopher Jones
                    </p>
                    <p className='xs:w-[80%] xs:text-center xs:mb-4 w-[80%] text-start mt-4'>
                    Discover a taste of local goodness at Veggies. From fresh produce to gourmet treats, we bring you the best our community has to offer. Shop local, eat fresh!
                    </p>

                    {logoutVisible &&(
                        <p onClick={() => {handleSignOut()}} className='bg bg-red-600 p-2 rounded-sm text-white cursor-pointer absolute bottom-0'>
                            Logout
                        </p>
                    )}
                </div>

                <div className='xs:w-full xs:w-3/4 xs:flex xs:flex-col lg:w-3/4'>
                    {tabsVisible && (
                        <div className='xs:w-full w-fit flex justify-around mb-4 lg:w-fit'>
                        
                            <div onClick={showContent} className='w-[8rem] h-[5vh] bg bg-white active:bg-gray-100 flex justify-center items-center border-b-2 border-r-2 hover:cursor-pointer'>
                                <p className=''>
                                    My PRODUCTS
                                </p>
                            </div>
                            <div onClick={showContent} className='w-[8rem] h-[5vh] bg bg-white active:bg-gray-100 flex justify-center items-center hover:cursor-pointer'>
                                <p className=''>
                                    My SALES
                                </p>
                            </div>
                            <div onClick={showContent} className='w-[8rem] h-[5vh] bg bg-white active:bg-gray-100 flex justify-center items-center hover:cursor-pointer'>
                                <p className=''>
                                    My MESSAGES
                                </p>
                            </div>
                            <div onClick={showContent} className='w-[10rem] h-[5vh] bg bg-white active:bg-gray-100 flex justify-center items-center hover:cursor-pointer'>
                                <p className=''>
                                    My CREDENTIALS
                                </p>
                            </div>
                        </div>
                    )}
                    {Categories && (
                        <div className='flex'>
                            <div onClick={showContent} className='w-[8rem] h-[5vh] bg bg-white active:bg-gray-100 flex justify-center items-center border-b-2 border-r-2 hover:cursor-pointer'>
                                <p className=''>
                                    Vegetables
                                </p>
                            </div>
                            <div onClick={showContent} className='w-[8rem] h-[5vh] bg bg-white active:bg-gray-100 flex justify-center items-center border-b-2 border-r-2 hover:cursor-pointer'>
                                    <p className=''>
                                        Fruits
                                    </p>
                            </div>
                            <div onClick={showContent} className='w-[8rem] h-[5vh] bg bg-white active:bg-gray-100 flex justify-center items-center border-b-2 border-r-2 hover:cursor-pointer'>
                                    <p className=''>
                                        Meat
                                    </p>
                            </div>
                            <div onClick={showContent} className='w-[8rem] h-[5vh] bg bg-white active:bg-gray-100 flex justify-center items-center border-b-2 border-r-2 hover:cursor-pointer'>
                                    <p className=''>
                                        Fish
                                    </p>
                            </div>
                        </div>
                    )}

                {MyProducts && (
                    <div className='xs-w:full xs:h-[75vh] xs:flex xs:flex-wrap xs:items-center xs:mt-4 w-full h-[70vh] flex flex-wrap gap-5 overflow-y-scroll gap-20 lg:w-full lg:h-[61vh]'>
                        
                        <div className='w-[22rem] h-[15rem] bg-red-400 flex flex-col justify-center items-center'>
                            {/* <input type="file" id='addPhoto' className='invisible' />
                            <label htmlFor="addPhoto" onChange={handleImageChange} className='text-2xl'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-24 h-24 hover:cursor-pointer">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </label> */}
                            <button onClick={addProduct}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-24 h-24 hover:cursor-pointer">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </button>
                            {NewProduct && (
                                <div className='w-[72rem] h-[60vh] bg-red-400 absolute left-[27vw] top-[15vh] right-1/5'>

                                </div>
                            )}
                        </div>


                        <div className='w-[22rem] h-[15rem] border border-red-400 flex'>

                        </div>
                        <div className='w-[22rem] h-[15rem] border border-red-400 flex'>

                        </div>
                        <div className='w-[22rem] h-[15rem] border border-red-400 flex'>

                        </div>
                        <div className='w-[22rem] h-[15rem] border border-red-400 flex'>

                        </div>
                        <div className='w-[22rem] h-[15rem] border border-red-400 flex'>

                        </div>
                        <div className='w-[22rem] h-[15rem] border border-red-400'>

                        </div>
                        <div className='w-[22rem] h-[15rem] border border-red-400'>

                        </div>
                        <div className='w-[22rem] h-[15rem] border border-red-400'>

                        </div>
                        <div className='w-[22rem] h-[15rem] border border-red-400'>

                        </div>
                        <div className='w-[22rem] h-[15rem] border border-red-400'>

                        </div>
                        <div className='w-[22rem] h-[15rem] border border-red-400'>

                        </div>
                        
                    </div>
                    )}

                {MySales && (
                    <div className='w-full h-[70vh] flex flex-wrap gap-5 overflow-y-scroll gap-20'>
                        
                        <div className='w-[22rem] h-[15rem] border border-green-400 flex'>
                        </div>
                        <div className='w-[22rem] h-[15rem] border border-green-400 flex'>

                        </div>
                        <div className='w-[22rem] h-[15rem] border border-green-400 flex'>

                        </div>
                        <div className='w-[22rem] h-[15rem] border border-green-400 flex'>

                        </div>
                        <div className='w-[22rem] h-[15rem] border border-green-400 flex'>

                        </div>
                        <div className='w-[22rem] h-[15rem] border border-green-400 flex'>

                        </div>
                        <div className='w-[22rem] h-[15rem] border border-green-400'>

                        </div>
                        <div className='w-[22rem] h-[15rem] border border-green-400'>

                        </div>
                        <div className='w-[22rem] h-[15rem] border border-green-400'>

                        </div>
                        <div className='w-[22rem] h-[15rem] border border-green-400'>

                        </div>
                        <div className='w-[22rem] h-[15rem] border border-green-400'>

                        </div>
                        <div className='w-[22rem] h-[15rem] border border-green-400'>

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

                {MyCredentials && (
                    <div className='flex flex-col'>
                        <div className='w-[20rem] flex justify-between mt-12'>
                            <p>FirstName</p>
                            <p>LastName</p>
                        </div>
                        <input type="text" placeholder='UserName' disabled={ChangeUserName} className='w-[15rem] h-[2rem] mt-8 border border-bottom-2' />
                        <input type="text" placeholder='Email' disabled className='w-[15rem] h-[2rem] mt-4 border border-bottom-2' />

                        <div className='w-[13rem] flex justify-between mt-4'>
                            <button onClick={ChangeCredentials} className='bg bg-red-400 w-[5rem] h-[2rem] rounded-sm'>
                                Change
                            </button>
                            <button className='bg bg-green-400 w-[5rem] h-[2rem] rounded-sm'>
                                Submit
                            </button>
                        </div>

                    </div>
                )}
                </div>
                
        </div>
    )
}

export default ProfileSeller;