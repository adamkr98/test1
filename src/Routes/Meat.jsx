import { signOut,getAuth } from "firebase/auth"

export function Meat(){
    const auth = getAuth()
    async function handleSignOut(){
        try {
            await signOut(auth);
        } catch (error) {
            console.log(error)
        }
    }
    return <div>
        <h1>This is the Meat page</h1>
        <button onClick={() => {handleSignOut()}}>Sign Out</button>
    </div> 
    
}