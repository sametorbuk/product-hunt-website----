import React from 'react';

import './App.css';

import MainPageContent from './components/main-page-comp/main-page-content';
import MainPageHeader from './components/main-page-header/main-page-header';
import { Route, Switch } from 'react-router-dom';
import { currentTopicsData } from './current-topics-data';


import TopicsPage from './components/Topics-comp/topics-comp';
import { useQuery } from '@apollo/client';
import { POST_PRODUCTS } from './grapql-prodcut-veri';





function App() {

  const FetchDataExample = () => {
    const { loading, error, data } = useQuery(POST_PRODUCTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    console.log(data);

    return <div>Data fetched!</div>;
  };

  return (
    <>
      <MainPageHeader />

      <FetchDataExample />

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
