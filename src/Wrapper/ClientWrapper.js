import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const URI = process.env.REACT_APP_GITHUB_API_URI;
const TOKEN = process.env.REACT_APP_GITHUB_API_TOKEN;

const httpLink = new HttpLink({
    uri: URI,
});

const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
            authorization: TOKEN ? `Bearer ${TOKEN}` : '',
        },
    };
});

export const BaseClient = () => {
    return new ApolloClient({
        cache: new InMemoryCache(),
        link: authLink.concat(httpLink),
    });
   
};
