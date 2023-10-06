import React from 'react';
import  "./style.css"

const HeaderGit = () => {
  return (
    <header className='main'>
      <div className="logo">
        <div>
        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Logo" />
        </div>
        <div>
        <p className='name'>Dashboard</p>
        </div>
      </div>
      <div className="search-bar">
        <div>
        <input className='inputbox' type="text" placeholder="Type to search" />
        </div>

        <div className='repoimg'>
          +
        </div>
        <div className='repoimg'>
          @
        </div>
        <div className='profile'>
        <img  alt='profile' src='https://google.github.io/cartoonset/images/cs100630750052269087.png'  />
        </div>
      </div>
    </header>
  );
};

export default HeaderGit;
