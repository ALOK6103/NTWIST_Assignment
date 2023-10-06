import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';  // CSS file for styling

const Home = () => {
  return (
    <div>
        <h4 className="custom-heading">NTWIST Assignment</h4>
    <div className="button-container">
      <Link to="/ntwistHomepage" className="button">Ntwist Home page</Link>
      <Link to="/githubHomepage" className="button">Github Home page</Link>
    </div>

    </div>
  );
};

export default Home;
