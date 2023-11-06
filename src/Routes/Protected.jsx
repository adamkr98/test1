import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";
import { database } from "../fbconfig";
import { getDatabase, ref, get } from 'firebase/database';
import { storage } from '../fbconfig'
import { ref as sRef } from 'firebase/storage';


const Protected = ({ children, requiredRole }) => {
  const { user } = UserAuth();
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState(null);
  const database = getDatabase();

  useEffect(() => {
    if (user) {
      const userId = user.uid;
      const userRef = ref(database, `users/${userId}`);
      
      get(userRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            const userData = snapshot.val();
            setUserRole(userData.role);
            

            console.log("User Role:", userData.role);
            console.log("Required Role:", requiredRole);

            if (userData.role === requiredRole) {
              return;
            } else {
              navigate('/accessDenied');
            }
          } 
        })
        .catch((error) => {
          console.error("Error getting user data:", error);
          navigate('/');
        });
    } else {
      navigate('/');
    }
  }, [user, navigate, requiredRole, user]);

  if (userRole === null) {
    return <div>Loading...</div>;
  }
 
  return children;
  
}

export default Protected;
