import {ApolloClient, InMemoryCache, NormalizedCacheObject} from "@apollo/client";
export const urlServer = 'http://localhost:4002'

const client = new ApolloClient<NormalizedCacheObject>({
    uri: `${urlServer}/graphql`,
    cache: new InMemoryCache(),

});

export default client;