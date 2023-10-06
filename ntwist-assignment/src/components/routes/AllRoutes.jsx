import React from "react";
import {Routes,Route} from "react-router-dom"
// import Home from "../Pages/Home";
import GitHubHomepage from "../github-homepage/GitHubHomepage";
import Home from "./Home";
import NtwistHomepage from "../ntwist-homepage/NtwistHomepage";


const AllRoutes=()=>{
    return (
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/ntwistHomepage" element={<NtwistHomepage />} />
         <Route path="/githubHomepage" element={<GitHubHomepage />} />

        </Routes>
    )
}

export default AllRoutes