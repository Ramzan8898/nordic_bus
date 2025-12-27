import { createRoot } from 'react-dom/client'
import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient";
import App from './App'
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
  </BrowserRouter>
)
