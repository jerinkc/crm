import { createContext, useContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Login } from '../components/auth/Login';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const storedToken = localStorage.getItem('authToken')
  const [authToken, setAuthToken] = useState(storedToken)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    localStorage.setItem('authToken', authToken)
  }, [authToken])

  const removeToken = () => {
    setAuthToken(null)
  }

  const addToken = (token) => {
    setAuthToken(token)
  }

  const login = (token) => {
    addToken(token)
    const defaultLoggedInUrl = "/admin"
    localStorage.removeItem('exitPath')
    navigate(defaultLoggedInUrl)
  }

  const logout = (manual = false) => {
    removeToken()

    if( manual ) return // manual(clicking logout button) - does not redirect to last known page

    const currentPath = location.pathname
    localStorage.setItem('exitPath', currentPath)
  }

  const authContextProviderStore = {
    authToken,
    setAuthToken,
    addToken,
    removeToken,
    login,
    logout
  }

  return (
    <AuthContext.Provider value={authContextProviderStore}>
      {
        authToken ? children : <Login/>
      }
    </AuthContext.Provider>
  );
};

export function useAuthContextProvider(){
  return useContext(AuthContext)
}


