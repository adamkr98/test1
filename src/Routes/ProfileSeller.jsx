import { React, useState, useRef, useEffect } from 'react'
import { getAuth, signOut } from 'firebase/auth'
import { storage } from '../fbconfig'
import { ref as sRef } from 'firebase/storage';


const ProfileSeller = () => {


    const ProductsBtn = useRef();
    const SalesBtn = useRef();
    const MessagesBtn = useRef();
   

    const [ MyProducts, setMyProducts ] = useState(true);
    const [ MySales, setMySales ] = useState(false);
    const [ MyMessages, setMyMessages ] = useState(false);
    const [ MyCredentials, setMyCredentials ] = useState(false);
    // const [ Categories, setCategories ] = useState(false);
    const [ NewProduct, setNewProduct ] = useState(false);
    const [ logoutVisible, setLogoutVisible ] = useState(true);
    const [ tabsVisible, setTabsVisible ] = useState(true);
    const [ addProductImage, setAddProductImage ] = useState(null);
    const [ Section, setSection ] = useState(false);
    const [ fruitsSection, setFruitsSection ] = useState(false);
   
    const [image, setImage] = useState(null);
    const quantityItemValue = useRef();
    const descriptionItemValue = useRef();
   


    useEffect(() => {
        const adjustLayout = () => {
          const width = window.innerWidth;
      
          if (width <= 1027) {
            setLogoutVisible(false);
            setTabsVisible(false);
            // setCategories(false);
          } else {
            setLogoutVisible(true);
            setTabsVisible(true);
            // setCategories(true);
          }
        };
      
        // Initial adjustment when the component mounts
        adjustLayout();
      
        // Listen for window resize events
        window.addEventListener('resize', adjustLayout);
      
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener('resize', adjustLayout);
        };
      }, []);
      
      
      
      
      
      
      

  
    let ChangeUserName;

    const ChangeCredentials = () => {
        ChangeUserName = true
    }

    const addProduct = () => {
        setNewProduct(true)
        setMyProducts(false)
        // setCategories(false)
    }


    const showContent = (event) => {
        let currentBtn = event.target.textContent;

        if(currentBtn === 'My PRODUCTS') {
            setMyProducts(true)
            // setCategories(true)
            setMySales(false)
            setMyMessages(false)
            setMyCredentials(false)
            setNewProduct(false)
            setSection(false)
            
       } else if (currentBtn === 'My SALES') {
            setMyProducts(false)
            setMyMessages(false)
            setMySales(true)
            setMyCredentials(false)
            // setCategories(false)
            setNewProduct(false)
            
       } else if (currentBtn === 'My MESSAGES') {
            setMyProducts(false)
            // setCategories(false)
            setMySales(false)
            setMyMessages(true)
            setMyCredentials(false)
            setNewProduct(false)

       } else if (currentBtn === 'My CREDENTIALS') {
            setMyProducts(false)
            // setCategories(false)
            setMySales(false)
            setMyMessages(false)
            setMyCredentials(true)
            setNewProduct(false)
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

      const openSection = () => {
        setMyProducts(false);
        setSection(true);
      }
      


    return (
        // <div className="sm:w-3/4 sm:h-[20vh] sm:flex sm:flex-col md:w-full md:h-[80vh] md:flex relative pt-[10vh] border border-red-400">
        <div className='xs:w-full xs:h-fit xs:flex xs:flex-col xs:items-center lg:w-full lg:h-[70vh] lg:flex-row lg:justify-between lg:mt-[10vh]'>
           
                {/* <div className='sm:w-3/4 sm:h-[10vh] md:w-1/4 md:h-[80vh] md:z-0 md:flex md:flex-col md:ml-24'> */}
                <div className='xs:3/4 xs:flex xs:flex-col xs:items-center lg:w-[20rem] lg:h-[60vh] lg:flex'>

                    <div className='xs:w-[10rem] xs:h-[10rem] xs:rounded-full xs:mt-4 xs:mb-4 md:w-[10rem] md:h-[10rem] md:rounded-full lg:w-[7rem] lg:h-[7rem] lg:rounded-full border border-green-700 md:mb-20 lg:mb-10'></div>

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
                        <p onClick={() => {handleSignOut()}} className='bg bg-red-600 p-2 rounded-sm text-white cursor-pointer'>
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
                    {/* {Categories && (
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
                    )} */}

                {MyProducts && (
                    <div className='xs-w:full xs:h-[75vh] xs:flex xs:flex-wrap xs:items-center xs:justify-center xs:mt-4 w-full h-[70vh] flex flex-wrap gap-5 overflow-y-scroll gap-20 lg:w-full lg:h-[56vh] lg:mt-12'>
                        
                        <div className='w-[22rem] h-[15rem] bg-red-400 flex flex-col justify-center items-center '>
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
                            
                        </div>


                        <div onClick={openSection} className='w-[22rem] h-[15rem] bg-cover bg-vegetablesSectionImage flex justify-center items-center hover:cursor-pointer'>
                            <p className='w-full text-[2rem] text-center bg-white'>
                                VEGETABLES
                            </p>
                        </div>
                        <div onClick={openSection} className='w-[22rem] h-[15rem] bg-cover bg-fruitsSectionImage flex justify-center items-center hover:cursor-pointer'>
                            <p className='w-full text-[2rem] text-center bg-white'>
                                FRUITS
                            </p>
                        </div>
                        <div onClick={openSection} className='w-[22rem] h-[15rem] bg-cover bg-meatSectionImage flex justify-center items-center'>
                            <p className='w-full text-[2rem] text-center bg-white'>
                                MEAT
                            </p>
                        </div>
                        <div onClick={openSection} className='w-[22rem] h-[15rem] bg-cover bg-fishSectionImage flex justify-center items-center'>
                            <p className='w-full text-[2rem] text-center bg-white'>
                                FISH
                            </p>
                        </div>
                        <div className='w-[22rem] h-[15rem] border border-red-400 flex justify-center items-center'>
                            
                        </div>
                        
                        
                    </div>
                    )}
                    {Section && (
                        <div className='w-[95%] h-[60vh] flex flex-wrap justify-between overflow-y-scroll gap-5'>
                            <div className='w-[22rem] h-[15rem] border border-red-400 flex justify-center items-center'>
                            
                            </div>
                            <div className='w-[22rem] h-[15rem] border border-red-400 flex justify-center items-center'>
                            
                            </div>
                            <div className='w-[22rem] h-[15rem] border border-red-400 flex justify-center items-center'>
                            
                            </div>
                            <div className='w-[22rem] h-[15rem] border border-red-400 flex justify-center items-center'>
                            
                            </div>
                            <div className='w-[22rem] h-[15rem] border border-red-400 flex justify-center items-center'>
                            
                            </div>
                            <div className='w-[22rem] h-[15rem] border border-red-400 flex justify-center items-center'>
                            
                            </div>  
                            <div className='w-[22rem] h-[15rem] border border-red-400 flex justify-center items-center'>
                            
                            </div>
                            <div className='w-[22rem] h-[15rem] border border-red-400 flex justify-center items-center'>
                            
                            </div>
                            <div className='w-[22rem] h-[15rem] border border-red-400 flex justify-center items-center'>
                            
                            </div>

                        </div>
                    )}
                    {NewProduct && (
                                <div className='xs:w-[98%] xs:flex xs:justify-center md:left-0 md:right-0 lg:w-[70vw] lg:h-[30rem] md:flex md:justify-center'>
                                    <div className='lg:w-[70%] lg:h-fit lg:mt-12 lg:ml-12 flex'>
                                        <div className='lg:w-[80%] lg:ml-8 flex flex-col'>
                                            <div className='flex flex-row justify-between'>
                                                <div className='flex flex-col'>
                                                    <input type="text" placeholder='Type your product name' className='w-full h-[2rem] mt-8 pl-2 mb-4 border-b border-black' />
                                                    <label htmlFor="harvestDate">Harvest Date</label>
                                                    <input id='harvestDate' type="date" className='w-2/3' />
                                                </div>

                                                <div className='lg:w-[10rem] lg:h-[10rem] flex flex-row justify-center items-center'>

                                                    <label htmlFor="productPhoto" className='w-[10rem] h-[10rem] border border-black'>

                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="w-fit h-fit hover:cursor-pointer">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                    </label>
                                                    <input id='productPhoto' type="file" className='hidden' />
                                                </div>
                                            </div>
                                            <div>
                                                <input ref={quantityItemValue} type="number" placeholder='Your price' className='w-[20%] h-[2rem] mt-4 mb-4 pl-2 border-b border-black' />
                                                <select name="" id="">
                                                    <option value="">kg</option>
                                                    <option value="">piece</option>
                                                </select>
                                            </div>
                                            <textarea ref={descriptionItemValue} type="text" className='border border-black w-[90%] min-h-[10rem] pl-4' />
                                            <div className='flex justify-center mt-4'>
                                                <button className='w-[10rem] border border-black rounded-sm'>Add your Product</button>
                                            </div>
                                            
                                        </div>

                                        
                                        
                                        
                                    </div>
                                    
                                </div>
                            )}

                {MySales && (
                    <div className='w-full h-[70vh] flex flex-wrap justify-center gap-5 overflow-y-scroll gap-20'>
                        
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
                            <div className='w-full'>

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