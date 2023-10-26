import { useState } from "react"
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { getDatabase, ref, set } from 'firebase/database'
import { useNavigate } from "react-router-dom"

import Profile from "./Profile"



const Signup = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [role, setRole] = useState('Buyer')

    const auth = getAuth()
    const navigate = useNavigate()

    const writeUserData = (userId, username, email, role) => {
        const db = getDatabase();
        set (ref(db, 'users/' + userId), {
            username: username,
            email: email,
            role: role

        })
    }

    async function handleSignUp(e){
    e.preventDefault();
    createUserWithEmailAndPassword(auth,email,password)
    .then((user) => {

        writeUserData(user.user.uid, username, email, role);
        alert("You're logged in!")
        navigate('/categories')
    })
    .catch((error) => {
        console.log(error)
    })
    }

    return (
        <div className="bg bg-[#588157] w-full h-[80vh] flex justify-center items-center">
        <div className="w-[90%] h-[70vh] flex flex-col">
         <h1 className="text-white text-xl">Hello Again!</h1>
         <form action="#" className="w-full flex flex-col items-center pt-4">
             <div className="w-full h-[50vh] flex flex-col items-center">

                 <input onChange={(e) => {setUsername(e.target.value)}} type="text" placeholder="Username" className="bg bg-white text-black placeholder-[#2d6a4f] w-[90%] h-[2rem] mb-4 pl-4" />

                 <input onChange={(e) => {setEmail(e.target.value)}} type="text" placeholder="Email" className="bg bg-white text-black placeholder-[#2d6a4f] w-[90%] h-[2rem] mb-4 pl-4" />

                 <input onChange={(e) => {setPassword(e.target.value)}} type="text" placeholder="Password" className="bg bg-white text-black placeholder-[#2d6a4f] w-[90%] h-[2rem] mb-4 pl-4" />

                 <input type="text" placeholder="Password Confirmation" className="bg bg-white text-black placeholder-[#2d6a4f] w-[90%] h-[2rem] mb-4 pl-4" />

                 <select name="" id="" onChange={(e) => {setRole(e.target.value)}} className="bg bg-white text-[#2d6a4f] placeholder-[#2d6a4f] w-[90%] h-[2rem] mb-8 pl-4">
                    <option value="Buyer">Buyer</option>
                    <option value="Seller">Seller</option>
                 </select>

                 <button onClick={(e) => {handleSignUp(e)}} className="bg bg-[#d4d700] text-white rounded-md w-[30%] pt-1 pb-1" >Sign Up</button>
             </div>
         </form>
        </div>
 </div>
 
    )
 
}

export default Signup;