import { createContext, useContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const storedAuthenticatedUserInfo = localStorage.getItem('authenticatedUserInfo') || {}
  const [authToken, setAuthToken] = useState(storedAuthenticatedUserInfo.authToken)
  const [authUserInfo, setAuthUserInfo] = useState(storedAuthenticatedUserInfo.authUserInfo || {})
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const authenticatedUserInfo = { authToken, authUserInfo }
    localStorage.setItem('authenticatedUserInfo', authenticatedUserInfo)
  }, [authToken, authUserInfo])

  const removeToken = () => {
    setAuthToken(null)
  }

  const addToken = (token) => {
    setAuthToken(token)
  }

  const login = (token, userInfo) => {
    addToken(token)
    setAuthUserInfo(userInfo)
    const defaultLoggedInUrl = "/admin"
    const lastKnownPath = localStorage.getItem('exitPath')
    localStorage.removeItem('exitPath')
    navigate(lastKnownPath || defaultLoggedInUrl)
  }

  const logout = (manual = false) => {
    removeToken()
    setAuthUserInfo({})

    if( manual ) return // manual(clicking logout button) - does not redirect to last known page

    const currentPath = location.pathname
    localStorage.setItem('exitPath', currentPath)
    navigate('/admin/login')
  }

  const authContextProviderStore = {
    authToken,
    setAuthToken,
    authUserInfo,
    addToken,
    removeToken,
    login,
    logout
  }

  return (
    <AuthContext.Provider value={authContextProviderStore}>
      { children }
    </AuthContext.Provider>
  );
};

export function useAuthContextProvider(){
  return useContext(AuthContext)
}


