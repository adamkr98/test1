import { signOut,getAuth } from "firebase/auth"
import { getDatabase, ref, get } from 'firebase/database';
import { database } from './../fbconfig';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Fruits(){
    const auth = getAuth()
    async function handleSignOut(){
        try {
            await signOut(auth);
        } catch (error) {
            console.log(error)
        }
    }
    return <div>
        <h1>This is the Fruits page</h1>
        <button onClick={() => {handleSignOut()}}>Sign Out</button>
    </div> 
    
}
