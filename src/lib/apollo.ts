import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4poeur026fo01xkavjwdooh/master',
    cache: new InMemoryCache()
})