import { useState, useMemo, useCallback } from 'react';
import useFetch from '../hooks/useFetch';
import { fetchUserRepos } from '../services/github';
import AppContext from './AppContext';
import useLocalStorage from '../hooks/useLocalStorage';

function AppProvider({ children }) {
  const [gitRepos, setGitRepos] = useState([]);
  const [dark, setDark] = useLocalStorage('dark', true);
  // const [favorites, setFavorites] = useState([]);
  const [favorites, setFavorites] = useLocalStorage('favorites', []);

  const { isLoading, errors, fetchData } = useFetch();

  const handleRepos = useCallback(async (url) => {
    await fetchData(fetchUserRepos(url), setGitRepos);
  }, [fetchData]);

  const values = useMemo(() => ({
    gitRepos,
    setGitRepos,
    isLoading,
    errors,
    handleRepos,
    dark,
    setDark,
    favorites,
    setFavorites,
  }), [gitRepos,
    isLoading,
    errors, handleRepos, dark, setDark, favorites, setFavorites]);

  return (
    <AppContext.Provider value={ values }>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
