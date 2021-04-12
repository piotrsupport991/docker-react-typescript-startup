import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ApolloClient, InMemoryCache, NormalizedCacheObject, ApolloProvider, HttpLink} from '@apollo/client'

const link = "http://localhost:4000/graphql/"

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({ uri: link})
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
    </ApolloProvider>,
  document.getElementById('root')
);

