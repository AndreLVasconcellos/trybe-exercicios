import React, { useState, useContext } from 'react';
import { HiTrash } from 'react-icons/hi';
import { BsFillHeartFill } from 'react-icons/bs';
import AppContext from '../context/AppContext';

function FormFilter({ gitRepos }) {
  // Vai ser um filtro por nome do repositório
  const [search, setSearch] = useState('');
  const [selectedLang, setSelectedLang] = useState([]);
  const { favorites, setFavorites } = useContext(AppContext);

  const languages = gitRepos.map((item) => item.language).filter((notNull) => notNull);
  const uniqueLanguages = [...new Set(languages.sort())];

  const filteredByName = gitRepos
    .filter((item) => item.name
      .includes(search))
    .filter((item) => {
      if (selectedLang.length === 0) {
        return true;
      }
      return item.name.includes(search);
    });

  function toggleFavorite(item) {
    const isAlreadyFavorite = favorites.find((favorite) => favorite.id === item.id);
    if (isAlreadyFavorite) {
      const newFavorites = favorites.filter((favorite) => favorite.id !== item.id);
      setFavorites(newFavorites);
    } else {
      setFavorites([...favorites, item]);
    }
  }

  return (
    <div className="Home">
      <h1>{`Repositórios ${filteredByName.length} de ${gitRepos.length}`}</h1>
      <label htmlFor="filtros">
        <input
          type="text"
          name="filtros"
          placeholder="buscar"
          value={ search }
          onChange={ (e) => setSearch(e.target.value) }
        />
      </label>
      <select
        name="languanges"
        id="languages"
        onChange={ (e) => e.target.value !== ''
          && setSelectedLang([...selectedLang, e.target.value]) }
      >
        <option value="">All</option>
        {
          uniqueLanguages.map((language) => (
            <option key={ language } value={ language }>{language}</option>
          ))
        }
      </select>
      <div className="filters">
        {
          selectedLang.map((lang) => (
            <div key={ lang }>
              <HiTrash onClick={ () => setSelectedLang([]) } />
              { lang }
            </div>
          ))
        }
      </div>
      {
        filteredByName.map((repo) => (
          <div
            key={ repo.id }
            className="repo"
          >
            <p>{repo.name}</p>
            <p>{repo.html_url}</p>
            {
              favorites.some((favorite) => favorite.id === repo.id)
                ? (
                  <BsFillHeartFill
                    onClick={ () => toggleFavorite(repo) }
                    style={ { color: 'red' } }
                  />)
                : (
                  <BsFillHeartFill
                    onClick={ () => toggleFavorite(repo) }
                  />)
            }
          </div>
        ))
      }

    </div>
  );
}

export default FormFilter;
