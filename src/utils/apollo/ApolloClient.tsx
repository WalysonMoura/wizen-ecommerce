/*eslint complexity: ["error", 6]*/

import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  HttpLink,
  ApolloLink,
} from "@apollo/client";

import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

/**
 * Middleware operation
 * If we have a session token in localStorage, add it to the GraphQL request as a Session header.
 */
export const middleware = new ApolloLink((operation, forward) => {
  /**
   * Se os dados da sessão existirem no armazenamento local, defina o valor como cabeçalho da sessão.
   * Aqui também excluímos a sessão se ela tiver mais de 24 horas
   */
  const session = process.browser ? localStorage.getItem("woo-session") : null;

  if (session) {
    operation.setContext(() => ({
      headers: {
        "woocommerce-session": `Session ${session}`,
      },
    }));
  }
  return forward(operation);
});

/**
 * Afterware operation.
 *
 * This catches the incoming session token and stores it in localStorage, for future GraphQL requests.
 */
export const afterware = new ApolloLink((operation, forward) =>
  forward(operation).map((response) => {
    /**
     * Check for session header and update session in local storage accordingly.
     */
    const context = operation.getContext();
    const {
      response: { headers },
    } = context;

    const session = headers.get("woocommerce-session");

    if (session && process.browser) {
      if ("false" === session) {
        // Remove session data if session destroyed.
        localStorage.removeItem("woo-session");
        // Update session new data if changed.
      } else if (!localStorage.getItem("woo-session")) {
        localStorage.setItem("woo-session", session);
      }
    }

    return response;
  })
);

const clientSide = typeof window === "undefined";

// Apollo GraphQL client.
const client = new ApolloClient({
  ssrMode: clientSide,
  link: middleware.concat(
    afterware.concat(
      createHttpLink({
        uri: process.env.WOOCOMMERCE_GRAPHQL_URL,
        fetch,
      })
    )
  ),
  cache: new InMemoryCache(),
});

export default client;

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    //  link: new HttpLink({
    //    uri: "https://main--time-pav6zq.apollographos.net/graphql",
    //  }),
    ssrMode: clientSide,
    link: middleware.concat(
      afterware.concat(
        createHttpLink({
          uri: process.env.WOOCOMMERCE_GRAPHQL_URL,
          fetch,
        })
      )
    ),
    cache: new InMemoryCache(),
  });
});
