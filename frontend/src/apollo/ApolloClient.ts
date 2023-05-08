import {ApolloClient, ApolloLink, concat, HttpLink, InMemoryCache, NormalizedCacheObject} from "@apollo/client";
export const urlServer = 'http://localhost:4002';
export const urlApiAuth = urlServer + '/authApi';

const appJWTToken = window.localStorage.getItem('token')

const httpLink = new HttpLink({uri: `${urlServer}/graphql`})
const apiAuthLink = new HttpLink({uri: `${urlApiAuth}`})

const authMiddleware = new ApolloLink((operation, forward)=> {
    if (appJWTToken) {
        operation.setContext({
            headers: {
                Authorization: `Bearer ${appJWTToken}`
            }
        });
    }
    return forward(operation);
})

export const client = new ApolloClient<NormalizedCacheObject>({
    link: concat(authMiddleware, httpLink),
    cache: new InMemoryCache(),
});

export const clientAuth = new ApolloClient<NormalizedCacheObject>({
    link: concat(authMiddleware, apiAuthLink),
    cache: new InMemoryCache(),
});

