import React from 'react';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';

function Header({ state }) {
  const { dark, setDark } = state;

  return (
    <header>
      <div
        className="theme"
        onClick={ () => setDark(!dark) }
        role="presentation"
      >
        {dark && <BsSunFill style={ { color: 'yellow' } } />}
        {!dark && <BsMoonFill />}
      </div>
    </header>
  );
}

export default Header;
