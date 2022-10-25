import { ApolloProvider } from '@apollo/client';
import { BaseClient } from './Wrapper/ClientWrapper';
import Header from './components/Header';
import { SearchTopic } from './components/SearchTopic';

function App() {
  return (
      <ApolloProvider client={BaseClient()}>
        <Header />
        <SearchTopic />
      </ApolloProvider>
  );
}

export default App;
