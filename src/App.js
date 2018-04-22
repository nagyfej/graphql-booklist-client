import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import config from './config/config';

import BookList from './components/BookList';
import AddBook from './components/AddBook';

const client = new ApolloClient({
  uri: config.graphQLServerUrl
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1>Ninjas Reading List</h1>
          <BookList></BookList>
          <AddBook></AddBook>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
