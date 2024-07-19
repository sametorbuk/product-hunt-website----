import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const httpLink = new HttpLink({
  uri: 'https://api.producthunt.com/v2/api/graphql',
  headers: {
    Authorization: `Bearer IC19hMZh1950fkHxpk8H6JJ0rHQ2b7AA4h9qK8YGH-o`,
    'ProductHunt-Api-Key': 'pJP19jxlpzcx7YliSUNpApuhj8-xpGbVdUTTbKGesV8',
  },
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
);