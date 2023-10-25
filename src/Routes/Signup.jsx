import { useState } from "react"
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from "react-router-dom"


const Signup = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const auth = getAuth()
    const navigate = useNavigate()

    async function handleSignUp(e){
    e.preventDefault();
    createUserWithEmailAndPassword(auth,email,password)
    .then((user) => {
        // Success...
        console.log(user)
        navigate('/categories')
    })
    .catch((error) => {
        // Error
        console.log(error)
    })
    }

    return (
        <div className="bg bg-[#588157] w-full h-[80vh] flex justify-center items-center">
        <div className="w-[90%] h-[70vh] flex flex-col">
         <h1 className="text-white text-xl">Hello Again!</h1>
         <form action="#" className="w-full flex flex-col items-center pt-4">
             <div className="w-full h-[50vh] flex flex-col items-center">
                 <input onChange={(e) => {setEmail(e.target.value)}} type="text" placeholder="Email" className="bg bg-white text-black placeholder-[#2d6a4f] w-[90%] h-[2rem] mb-4 pl-4" />

                 <input onChange={(e) => {setPassword(e.target.value)}} type="text" placeholder="Password" className="bg bg-white text-black placeholder-[#2d6a4f] w-[90%] h-[2rem] mb-4 pl-4" />

                 <input type="text" placeholder="Password Confirmation" className="bg bg-white text-black placeholder-[#2d6a4f] w-[90%] h-[2rem] mb-4 pl-4" />

                 <select name="" id="" className="bg bg-white text-[#2d6a4f] placeholder-[#2d6a4f] w-[90%] h-[2rem] mb-8 pl-4">
                    <option value="">Buyer</option>
                    <option value="">Seller</option>
                 </select>

                 <button onClick={(e) => {handleSignUp(e)}} className="bg bg-[#d4d700] text-white rounded-md w-[30%] pt-1 pb-1" >Sign Up</button>
             </div>
         </form>
        </div>
 </div>
 
    )
 
}

export default Signup;