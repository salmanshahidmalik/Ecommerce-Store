import useAuthStore from "../store/authStore";
import { Navigate } from "react-router-dom";

function ProtectedRoute({children}){

const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
return isLoggedIn ? children : <Navigate to="/login" />;

}   

export default ProtectedRoute;