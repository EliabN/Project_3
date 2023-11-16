// Import the main styling for the app
import './App.css';
// Import Outlet to render nested routes
import { Outlet } from 'react-router-dom';
// Import components from Apollo Client fir GraphQL
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

// Apollo Client instance with GraphQL URI and cache
const client = new ApolloClient({
  // GraphQL server is served at '/graphql' endpoint
  uri: '/graphql', 
  cache: new InMemoryCache(),
});

// Define the main App component
function App() {
  // Wrap App with ApolloProvider for GraphQL functions
  return (
    <ApolloProvider client={client}>
      {/* Main container div with flex layout */}
      <div className="flex-column justify-center align-center min-100-vh bg-primary">
        {/* Render the nested routes defined in your routing setup */}
        <Outlet />
      </div>
    </ApolloProvider>
  );
}

// Export App
export default App;
