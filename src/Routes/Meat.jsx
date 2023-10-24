import { signOut,getAuth } from "firebase/auth"
import { getDatabase, ref, get } from 'firebase/database';
import { database } from './../fbconfig';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
