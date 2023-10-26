import React, { useContext, useState } from 'react'
import { getDatabase, ref, child, get } from "firebase/database";
import { Context } from '../Context/AuthContext'; 


export default function Profile() {

  const { user } = useContext(Context);

  const userID = user.uid

  const dbRef = ref(getDatabase());

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');

  
get(child(dbRef, `users/${userID}`)).then((snapshot) => {
  if (snapshot.exists()) {
    const userData= snapshot.val();

    const userName = userData.username
    const email = userData.email
    setUserName(userName)
    setEmail(email)
    // setUserName(username)
    console.log(userData);

  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});

  

  return (
    <div>
      User Name: {userName}
    </div>
  )
}
