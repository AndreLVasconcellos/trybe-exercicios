import { useCallback, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { fetchUser } from '../services/github';
import AuthContext from './AuthContext';

function AuthProvider({ children }) {
  const [gitUserData, setGitUserData] = useState(null);
  const history = useHistory();

  const { isLoading, errors, fetchData } = useFetch();

  const handleLogin = useCallback(async (username) => {
    await fetchData(fetchUser(username), setGitUserData);
    history.push('/home');
  }, [history, fetchData]);

  const values = useMemo(() => ({
    isLoading, gitUserData, errors, handleLogin,
  }), [isLoading, gitUserData, errors, handleLogin]);

  return (
    <AuthContext.Provider value={ values }>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
