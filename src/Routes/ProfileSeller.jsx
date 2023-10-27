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
        <div className='w-full flex flex-col'>
            <h1>
                Seller Profile
            </h1>

        
                <p onClick={() => {handleSignOut()}} className='cursor-pointer'>
                    Logout
                </p>
        </div>
    )
}

export default ProfileSeller;