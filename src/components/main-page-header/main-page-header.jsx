import './main-page-header.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import HoveredComp from './header-btn-hover-comp';
import {
  faClock,
  faRocket,
  faMessage,
  faFire,
  faCalendar,
  faCompass,
} from '@fortawesome/free-solid-svg-icons';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import LoginModals from '../login-form-comp/login-form-comp';




const hoveredCompData = [
  {
    ex1: 'Coming soon',
    ex2: 'Upcoming launches to watch',
    color: 'green',
    code: faClock,
  },
  {
    ex1: 'Launch archive',
    ex2: 'Most-loved launches by the community',
    color: 'red',
    code: faRocket,

  },
  {
    ex1: 'Launch Guide',
    ex2: 'Checklists and pro tips for launching',
    color: 'blue',
    code: faCompass,

  },
  {
    ex1: 'Discussions',
    ex2: 'Ask questions, find support, and connect',
    color: '#fd6781',
    code: faMessage,

  },
  {
    ex1: 'Streaks',
    ex2: 'The most active community members',
    color: 'red',
    code: faFire,

  },
  {
    ex1: 'Events',
    ex2: 'Meet others online and in-person',
    color: 'green',
    code: faCalendar,

  },
];

export default function MainPageHeader() {
  const [hoveredLaunches, setHoveredLaunches] = useState(false);
  const [isLaunchesDivHovered, setIsLaunchesDivHovered] = useState(false);

  const [hoveredCommunity, setHoveredCommuntiy] = useState(false);
  const [isCommunityDivHovered, setIsCommunityDivHovered] = useState(false);

  const [hovered, setHovered] = useState(false);
  const [isDivHovered, setIsDivHovered] = useState(false);


  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const history = useHistory();
  const clickMainPageHandler = () => {
    history.push("/")
  }


  const firstThree = hoveredCompData.slice(0, 3);
  const secondThree = hoveredCompData.slice(3, 6);


  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    if (!isDivHovered) {
      setHovered(false);
    }
  };

  return (
    <>
      <header className="main-page-header">





        <div className="main-page-header-left">
          <img onClick={clickMainPageHandler}
            className="main-page-logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5KFKNkfUtMNcGRswfmr_eh3RK9R9ix9wmSPbosLRAo9hLb0I8IoZb2jjXLQxj49PBzyQ&usqp=CAU"
            alt=""
          />
          <input type="text" placeholder="Search (ctrl+k)" />
        </div>

        <nav className="header-nav">
          <button
            onMouseEnter={() => setHoveredLaunches(true)}
            onMouseLeave={() => setHoveredLaunches(false)}
          >
            Launches
          </button>

          {(hoveredLaunches || isLaunchesDivHovered) && (
            <HoveredComp
              array={firstThree}
              stateChange={setIsLaunchesDivHovered}
            />
          )}

          <button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Products
          </button>

          {(hovered || isDivHovered) && (
            <div
              onMouseEnter={() => setIsDivHovered(true)}
              onMouseLeave={() => setIsDivHovered(false)}
              className="header-products-content"
            >
              <div className="header-products-content-row1">
                <FontAwesomeIcon className="bull-horn-icon" icon={faBullhorn} />
                <div className="header-product-content-row1-right">
                  <p className="header-product-content-p">
                    Shoutouts Leaderboard
                  </p>
                  <p className="header-product-content-p">
                    {' '}
                    The most-loved products on Product Hunt
                  </p>
                </div>
              </div>

              <div className="header-products-main-content">
                <div className="left">
                  <p>Work & Productivity</p>
                  <p>Engineering & Development</p>
                  <p>Design & Creative</p>
                  <p>Finance</p>
                  <p>Social & Community</p>
                  <p>Marketing & Sales</p>
                  <p>Travel</p>
                  <p>Health & Fitness</p>
                  <p>Platforms</p>
                  <p>Product add-ons</p>
                  <p>Web3</p>
                  <p>Physical Products</p>
                  <p>AI</p>
                  <p>Ecommerce</p>
                  <p>Family</p>
                  <p>Lifestyle</p>
                </div>
              </div>
            </div>
          )}

          <button onClick={() => history.push("/news")}>News</button>

          <button
            onMouseEnter={() => setHoveredCommuntiy(true)}
            onMouseLeave={() => setHoveredCommuntiy(false)}
          >
            Community
          </button>

          {(hoveredCommunity || isCommunityDivHovered) && (
            <HoveredComp
              array={secondThree}
              stateChange={setIsCommunityDivHovered}
            />
          )}

          <button>Advertise</button>
        </nav>

        <div className="main-page-header-sucscribe-and-sign-btn-div">



          <button>Subscribe</button>




          <button onClick={toggle} >Sign in</button>
          <LoginModals modal={modal} toggle={toggle} />






        </div>
      </header>
    </>
  );
}
