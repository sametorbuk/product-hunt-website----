import React from 'react';

import './App.css';

import MainPageContent from './components/main-page-comp/main-page-content';
import MainPageHeader from './components/main-page-header/main-page-header';
import { Route, Switch } from 'react-router-dom';
import { currentTopicsData } from './current-topics-data';


import TopicsPage from './components/Topics-comp/topics-comp';





function App() {
  return (
    <>
      <MainPageHeader />


      <Switch>
        <Route path="/" exact>
          <MainPageContent />
        </Route>

        {currentTopicsData.map((topic) => {
          const cleanedValue = topic.name.replace(/\s+/g, '');

          return (

            <Route key={topic.name} path={`/topics/${cleanedValue}`}>

              <TopicsPage topicsData={topic.topicsData} ranksProductData={topic.ranksProductData} />

            </Route>


          )

        })}




      </Switch>
    </>
  );
}

export default App;
