import {useContext} from 'react'
import { AuthContext } from '../Context/CreateAuthContext'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
  const {isAuth, handleLogin, handleLogOut} = useContext(AuthContext);
  if(!isAuth){ return <Navigate to="/login"/>};
  return children;

}

const Video = (id) => {
  return (
    <div>
        <img src={id} alt="id"/>
    </div>
  )
}

export { Video }

// export default PrivateRoute