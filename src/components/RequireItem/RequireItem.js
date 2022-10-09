import { useContext } from "react";
import { useLocation, Navigate } from "react-router-dom";
import StateContext from '../../components/context/state';


function RequireItem({ children }) {
  const { state, dispatch } = useContext(StateContext);
  const location = useLocation();
  console.log(state.cart.length)
  if (state.cart.length === 0 ) {
    console.log(location.pathname)
    return <Navigate to="/store" state={{ from: location }} replace />;
   } 
   //else {
  //   if (isLoggedIn && location.pathname === "/login"){
  //     return <Navigate to="/" state={{ from: location }} replace />;
  //   }
  // }

  return children;
}

export default RequireItem;