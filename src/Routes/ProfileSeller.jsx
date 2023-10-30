import { React } from 'react'
import { getAuth, signOut } from 'firebase/auth'


const ProfileSeller = () => {


    const auth = getAuth()
  async function handleSignOut(){
      try {
          await signOut(auth);
          
          
      } catch (error) {
          console.log(error)
      }
  }


    return (
        <div className='w-full h-[80vh] flex relative items-end'>
           
            <div className='w-1/4 h-[80vh] pt-[10rem] z-0 flex flex-col items-center'>
                <div className='w-[10rem] h-[10rem] rounded-full border border-green-700 mb-20'></div>

                <p>
                    Name
                </p>
                <p onClick={() => {handleSignOut()}} className='cursor-pointer'>
                    Logout
                </p>
            </div>

         <div className='w-full'>
            <div className='w-full flex'>
                <p className='text-[3rem]'>
                    sell
                </p>
            </div>

                <div className='w-full h-[60vh] flex flex-wrap gap-10 overflow-y-scroll gap-20'>
                    
                    <div className='w-[30%] h-[15rem] bg bg-red-400'>

                    </div>
                    <div className='w-[30%] h-[15rem] bg bg-red-400'>

                    </div>
                    <div className='w-[30%] h-[15rem] bg bg-red-400'>

                    </div>
                    <div className='w-[30%] h-[15rem] bg bg-red-400'>

                    </div>
                    <div className='w-[30%] h-[15rem] bg bg-red-400'>

                    </div>
                    <div className='w-[30%] h-[15rem] bg bg-red-400'>

                    </div>
                    <div className='w-[30%] h-[15rem] bg bg-red-400'>

                    </div>
                    <div className='w-[30%] h-[15rem] bg bg-red-400'>

                    </div>
                    <div className='w-[30%] h-[15rem] bg bg-red-400'>

                    </div>
                    <div className='w-[30%] h-[15rem] bg bg-red-400'>

                    </div>
                    <div className='w-[30%] h-[15rem] bg bg-red-400'>

                    </div>
                    <div className='w-[30%] h-[15rem] bg bg-red-400'>

                    </div>
                    
                </div>
         </div>
                
        </div>
    )
}

export default ProfileSeller;