import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'

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
    <div className="bg bg-[#588157] w-full h-[80vh] flex justify-center items-center">
           <div className="w-[90%] h-[70vh] flex flex-col">
            <h1 className="text-white text-xl">Hello Again!</h1>
            <form action="#" className="w-full flex flex-col items-center pt-4">
                <div className="w-full h-[50vh] flex flex-col items-center">
                    <input onChange={(e) => {setEmail(e.target.value)}} type="text" placeholder="Email" className="bg bg-white text-black placeholder-[#2d6a4f] w-[90%] h-[2rem] mb-4 pl-4" />
                    <input onChange={(e) => {setPassword(e.target.value)}} type="text" placeholder="Password" className="bg bg-white text-black placeholder-[#2d6a4f] w-[90%] h-[2rem] mb-4 pl-4" />
                    <button onClick={(e) => {handleSignIn(e)}} className="bg bg-[#d4d700] text-white rounded-md w-[30%] pt-1 pb-1" >Sign In</button>
                </div>
            </form>
           </div>
    </div>
    )
}

export default Signin;