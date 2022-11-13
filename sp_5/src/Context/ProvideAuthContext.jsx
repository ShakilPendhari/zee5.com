import {useState} from 'react'
import { AuthContext } from "./CreateAuthContext";
// console.log(AuthContext);

const initState = {
    isAuth : false,
    username: null,
    token: null,
}


function AuthContextProvider({children}){

    const [authState, setAuthState] = useState(initState);

    const [url, setUrl] = useState("")
    const [search, setSearch] = useState(true)

    function handleLogin(){
        setAuthState({
            ...authState,
            isAuth: true,
            username: "shakil",
            token:"abcd"
        })
    }

    function handleLogOut(){
        setAuthState(initState);
    }

    const value = {authState, handleLogin, handleLogOut, url, setUrl, search, setSearch}

  return (
    <AuthContext.Provider value = {value}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;