import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

import {
    registerApolloClient,
} from "@apollo/experimental-nextjs-app-support";

//getClient is function , later you have to call and we get object 
export const { getClient } = registerApolloClient(() => {
    return new ApolloClient({
        cache: new InMemoryCache(),
        link: new HttpLink({
            // uri: "https://countries.trevorblades.com/",
            uri: "http://localhost:4000/",
            // you can disable result caching here if you want to
            // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
            fetchOptions: { cache: "no-store" },
        }),
    });
});
