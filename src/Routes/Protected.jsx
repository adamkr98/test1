import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context/AuthContext";

export function Protected({children}){
    const {user} = useContext(Context);

    if(!user){
        return <Navigate to="/" replace/>
    }else{

        const userRole = user.role;

        const buyerRoutes = [ "/categories", "/vegetables", "/fruits", "/meat", "/fish", '/profileBuyer' ];
        const sellerRoutes = [ "/profileSeller" ]
        return children;
    }
}
// import { Navigate, Outlet } from "react-router-dom";
// import { useContext } from "react";
// import { Context } from "../Context/AuthContext";

// export function Protected({ children }) {
//   const { user } = useContext(Context);

//   if (!user) {
//     return <Navigate to="/" replace />;
//   }

//   const userRole = user.role;
//   const currentPath = window.location.pathname;

//   if (userRole === "Buyer" && buyerRoutes.includes(currentPath)) {
//     return children;
//   } else if (userRole === "Seller" && sellerRoutes.includes(currentPath)) {
//     return children;
//   } else {
//     return <Navigate to="/" replace />;
//   }
// }

