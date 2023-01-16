import * as React from 'react';
import './style.css';
import { router } from './routes/routes';
import { RouterProvider } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

const client = new ApolloClient({
  cache: new InMemoryCache(),

  link: createUploadLink({
    headers: {
      'Apollo-Require-Preflight': 'true', // this header will reach the server
      'Content-Type': 'application/json',
    },
    uri: process.env.GRAPHQL_URI,
  }),
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <AppRoutes />
    </ApolloProvider>
  );
};

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
export default App;
