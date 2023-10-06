import React from 'react';
import  "./style.css"


const RepositoryList = () => {
  const repositories = ['Repository/1', 'Repository/2', 'Repository/3'];

  return (
    <div className="repository-list">
      <div className='newrepo'>
      <h2> Top Repositories</h2>
      <button>New</button>
      </div>
      <input placeholder='Find a repository' className='searchRepo'/>
      <ul className='list'>
        {repositories.map((repo, index) => (
          <div className='repoDes'>
            <img alt='profile-pic' src='https://google.github.io/cartoonset/images/cs1125646615313076.png' className='profilepic' />
          <li key={index}>{repo}</li>
          </div>
        ))}
      </ul>

      <div>
        <h4>Recent activity</h4>
        <p>When you take actions across GitHub, we’ll provide links to that activity here. </p>
      </div>

      <div>
        <h4>Your teams</h4>
      <input placeholder='Find a team' className='searchRepo'/>

        <ul>
        <div className='repoDes1'>
            <img alt='profile-pic' src='https://i.pinimg.com/1200x/a9/62/ef/a962ef5ea8dfa25418c0a2b0057a64d4.jpg' className='profilepic' />
            
          <li >masai-course/student</li>
          </div>
          <div className='repoDes1'>
            <img alt='profile-pic' src='https://google.github.io/cartoonset/images/cs1125646615313076.png' className='profilepic' />
            
          <li >masai-course/cohort-38</li>
          </div>
          </ul>
      </div>
    </div>
  );
};

export default RepositoryList;
