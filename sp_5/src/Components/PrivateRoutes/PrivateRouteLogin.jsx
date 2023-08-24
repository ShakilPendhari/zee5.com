import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRouteLogin = ({children}) => {
  const { token } = useSelector((store)=>store.auth);

  console.log("Token:::",token);

  if(!token)
  {
     return <Navigate to="/Login"/>
  }
 
  return children;

}

export default PrivateRouteLogin