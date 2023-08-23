import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({children}) => {
  const { token } = useSelector((store)=>store.auth)
  if(!token){ return <Navigate to="/Login"/>};
  return children;

}

export default PrivateRoute