import React from 'react'
import HeaderGit from './Header'
import RepositoryList from './RepositoryList'
import Footer from './Footer'
import  "./style.css"
import adv from "../utils/adv.png"
import adv2 from "../utils/adv2.png"


let homeContent=[
  {
    title:"Updates to your homepage feed",
    description:"We've combined the power of the Following feed with the For you feed so there’s one place to discover content on GitHub. There’s improved filtering so you can customize your feed exactly how you like it, and a shiny new visual design. ✨",

  },
  {
    title:"Tooljet",
    description:"Low-code platform for building business applications. Connect to databases, cloud storages, GraphQL, API endpoints, Airtable, Google sheets, OpenAI, etc and build apps using drag and drop applicati… ",
    
  },
  {
    title:"cypress.io",
    description:"Install, cache and run Cypress.io tests on CircleCI with minimal configuration. ",
    
  },
  {
    title:"ℹ️ Important Notice ℹ️",
    description:"If you're upgrading from an older version and using Postgres as the meta-database, please be aware that the initial upgrade may take a little longer. This delay is due to the…",
    
  },
  {
    title:"🚀 NocoDB : Bug Fix Release",
    description:"If you're upgrading from an older version and using Postgres as the meta-database, please be aware that the initial upgrade may take a little longer. This delay is due to the…",
    
  }
]

const GitHubHomepage = () => {
  return (
    <div>
        <HeaderGit  />
        <div className='mid'>
          <div className='repos'>
          <RepositoryList />
          </div>
          <div className='extradata'>
        <h2 >Home</h2>
      {homeContent.map((el)=>(
        <div className='container'>
          <h3>{el.title}</h3>
          <p>{el.description}</p>
        </div>
      ))}

      <div className='morecont'>
        More
      </div>

      <Footer />
          
          </div>
          <div className='ads'>
             <img src={adv} alt="adv-pic" />
             <br></br>
             <br></br>
             <img src={adv2} alt="adv-pic" />

          </div>

         
        </div>
      {/* <Footer /> */}
    </div>
  )
}

export default GitHubHomepage