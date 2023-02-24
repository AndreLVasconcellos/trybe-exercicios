/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FormFilter from '../components/FormFilter';
import AppContext from '../context/AppContext';
import AuthContext from '../context/AuthContext';
import '../styles/Home.css';

function Home() {
  const authCont = useContext(AuthContext);
  const { gitUserData: { repos_url: reposUrl } } = authCont;

  const { handleRepos, gitRepos, isLoading } = useContext(AppContext);

  useEffect(() => {
    handleRepos(reposUrl);
  }, []);

  if (isLoading) {
    return <h1>Carregando...</h1>;
  }

  return (
    <>
      <Link to="/favorites">
        Favorites
      </Link>
      <FormFilter
        gitRepos={ gitRepos }
      />
    </>

  );
}

export default Home;
