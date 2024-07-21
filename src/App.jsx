import React, { useState } from 'react';

import './App.css';

import MainPageContent from './components/main-page-comp/main-page-content';
import MainPageHeader from './components/main-page-header/main-page-header';
import { Route, Switch } from 'react-router-dom';
import { currentTopicsData } from './current-topics-data';


import TopicsPage from './components/Topics-comp/topics-comp';
import NewsPage from './components/news-page/news-page-comp';
import ScrollToTopOnPageChange from './components/main-page-header/scrooll-to-top-page/scroll-top-page';
import FocusNewComp from './components/news-page/news-comp/focus-new-info/focus-new-comp';





function App() {
  const [focusNewInfo, setFocusNewInfo] = useState(null)


  return (
    <>
      <MainPageHeader />


      <ScrollToTopOnPageChange />

      <Switch>
        <Route path="/" exact>
          <MainPageContent />
        </Route>

        {currentTopicsData.map((topic, index) => {
          const cleanedValue = topic.name.replace(/\s+/g, '');

          return (

            <Route key={index} path={`/topics/${cleanedValue}`}>

              <TopicsPage topicsData={topic.topicsData} ranksProductData={topic.ranksProductData} />

            </Route>


          )

        })}

        <Route path="/news">

          <NewsPage setFocusNewInfo={setFocusNewInfo} />

        </Route>

        <Route path="/news-topic/details">

          <FocusNewComp item={focusNewInfo} />

        </Route>


      </Switch>
    </>
  );
}

export default App;
