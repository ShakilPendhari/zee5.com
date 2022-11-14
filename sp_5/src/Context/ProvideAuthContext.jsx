import {useState} from 'react'
import { AuthContext } from "./CreateAuthContext";
// console.log(AuthContext);

const initState = {
    isAuth : false,
    username: null,
    token: null,
};

const obj = {
    Title:"",
    Year: "",
    Type:"",
}


function AuthContextProvider({children}){

    const [authState, setAuthState] = useState(initState);

    const [url, setUrl] = useState("")
    const [search, setSearch] = useState(true);
    const [loading, setLoading] = useState(false);
    const [dataurl, setDataurl] = useState([]);
    const [change, setChange] = useState("");
    const [logout, setLogout] = useState(false)

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

    const value = {setAuthState, authState, handleLogin, handleLogOut, url, setUrl, search, setSearch, loading, setLoading, dataurl, setDataurl, change, setChange,obj, logout, setLogout}

  return (
    <AuthContext.Provider value = {value}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;