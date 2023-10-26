import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import Profile from "./Profile"

const Signin = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const auth = getAuth()
    const navigate = useNavigate();

    async function handleSignIn(e){
        e.preventDefault();

    signInWithEmailAndPassword(auth,email,password)
    .then((user) => {
        // Success...
        alert('User loggedIn!')
        console.log(user)
        navigate('/categories')
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