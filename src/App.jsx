import React from 'react';

import './App.css';

import MainPageContent from './components/main-page-comp/main-page-content';
import MainPageHeader from './components/main-page-header/main-page-header';
import { Route, Switch } from 'react-router-dom';
import { currentTopicsData } from './current-topics-data';


import TopicsPage from './components/Topics-comp/topics-comp';
import NewsPage from './components/news-page/news-page-comp';
import ScrollToTopOnPageChange from './components/main-page-header/scrooll-to-top-page/scroll-top-page';





function App() {



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

          <NewsPage />

        </Route>


      </Switch>
    </>
  );
}

export default App;
