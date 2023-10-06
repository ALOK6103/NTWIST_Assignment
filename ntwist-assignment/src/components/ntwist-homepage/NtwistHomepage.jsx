import React, { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import "./Header.css"; // CSS for header

const NtwistHomepage = () => {
 
  const [scrollStyles, setScrollStyles] = useState({
    backgroundColor: '',
    color: '',
    logoBackgroundColor: '',
  });

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 10) {
      setScrollStyles({
       
        backgroundColor: 'white',
        color: 'black',
        logoBackgroundColor: '#003358',
        
        marginTop:"-20px",
        marginLeft:"-20px"

      });
    } else {
      setScrollStyles({
        backgroundColor: '',
        color: '',
        logoBackgroundColor: '',
        // marginTop:"-20px"

      });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div>
      <div className="header">
        <div  style={{ ...scrollStyles, display: 'flex', justifyContent: 'space-between', position: 'fixed',width:"100%",height:"60px" }}>
          <div className="logo">
            <img
              alt="logo"
              style={{
                marginLeft:"20px",
                backgroundColor: scrollStyles.logoBackgroundColor,
                transition: 'background-color 0.3s',
              }}
              src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png"
              width={180}
            />
          </div>
          <div className="sections">
            <div>
              <p>Home</p>
            </div>
            
              <Dropdown
                section="Industries"
                options={[
                  "Sustainability",
                  "Mineral Processing",
                  "Mine-to-Mill",
                  "Oil & Gas",
                ]}
              />
           
            <div>
              <p>AI Software</p>
            </div>

            <div>
              <p>Blog</p>
            </div>
            <div>
              <p>Contact Us</p>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "50px",
            paddingRight: "150px",
            marginTop: 100,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h1 style={{ fontSize: 45 }}>
              Data-powered solutions <br></br> for Industrial Excellence
            </h1>
            <button
              style={{
                padding: 10,
                backgroundColor: "dodgerblue",
                paddingLeft: 20,
                paddingRight: 20,
                color: "white",
                width: 130,
                border:0,
                borderRadius:2
              }}
            >
              Read More
            </button>
          </div>
          <div>
            <img
              alt="logo2"
              src="https://ntwist.com/wp-content/uploads/2023/01/home-image-icons-v6.png"
              width={720}
            />
          </div>
        </div>
      </div>

      <div className="content1">
        <div className="inner-content">
          <p className="header1">Mine-To-Mill-To-Mine Optimization </p>
          <p className="para">
            NTWIST’s newest product unlocks up to $250/oz in previously
            inaccessible value in open pit gold mines by connecting siloed data
            sources like block models, fleet management systems, stockpile
            surveys, and plant instruments. This allows your company to better
            track material flow, and feed properties, identify plan/production
            discrepancies, and correct resource models and production plans.
          </p>
          <button className="btn">Read More</button>
        </div>
        <div>
          <img
            alt="img1"
            src="https://ntwist.com/wp-content/uploads/2023/01/iStock-1339284457-2048x1365.jpg"
          />
        </div>
      </div>

      <div className="content2">
        <div>
          <img
            alt="img1"
            src="https://ntwist.com/wp-content/uploads/2021/12/iStock-1284372575.jpg"
          />
        </div>
        <div className="inner-content2">
          <p className="header2">Sustainability</p>
          <p className="para2">
            Environmental stewardship is a priority for NTWIST. We help our
            customers to minimize their sustainability impact on the planet.
            Emissions or environmental targets are used alongside productivity
            targets to define success for our customers. With the increasing
            relevance of carbon accounting and emissions tracking, NTWIST offers
            a suite of tools to increase visibility into environmental
            performance and help processing plants track, manage, optimize, and
            report key metrics.
          </p>
          <button className="btn2">Read More</button>
        </div>
      </div>

      <div className="content1">
        <div className="inner-content">
          <p className="header1">Mineral Processing</p>
          <p className="para">
            NTWIST offers a number of solutions for mills, concentrators, and
            leach plants. Our solutions help operations to reduce the effect of
            feed variability, avoid downtime and increase peak throughput while
            decreasing energy and reagent consumption.
          </p>
          <button className="btn">Read More</button>
        </div>
        <div>
          <img
            alt="img1"
            src="https://ntwist.com/wp-content/uploads/2021/12/iStock-1322302283.jpg"
          />
        </div>
      </div>

      <div className="content2">
        <div>
          <img
            alt="img1"
            src="https://ntwist.com/wp-content/uploads/2022/03/2021-02-oil-and-gas-digital-hero-e1648984580884.png"
          />
        </div>
        <div className="inner-content2">
          <p className="header2">Oil & Gas</p>
          <p className="para2">
            Oil and Gas plants require a high level of control and robustness in
            their operation due to the high risks to people and environment.
            NTWIST helps Oil & Gas customers to analyze historical data,
            identify opportunities for process control improvements, and reduce
            variability in any part of the process, thus providing enhanced
            reliability and safety.
          </p>
          <button className="btn2">Read More</button>
        </div>
      </div>


      <div className="footer">
      <div className="logo-footer">
            <img
              alt="logo"
              src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png"
              width={180}
            />
          </div>

          <div className="footerbar">
           <p>Home</p>
           <p>About Us</p>
           <p>Contact Us</p>
           <p>Privacy Policy</p>
           <p>Sitemap</p>
          </div>

          <p className="address">9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada</p>

          <div className="socialmedia">
            <img alt="twitter" src="https://logos-download.com/wp-content/uploads/2016/02/Twitter_Logo_new.png" width={20} />
            <img alt="in" src="https://myclouddoor.com/wp-content/uploads/2019/11/Linkedin-logo.png" width={40} />
          </div>
          <p className="address">© 2022. Ntwist Inc.</p>
      </div>
    </div>
  );
};

export default NtwistHomepage;
