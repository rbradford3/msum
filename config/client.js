import { ApolloClient, createNetworkInterface } from 'react-apollo';
import { AsyncStorage } from 'react-native'

const logErrors = {
  applyAfterware({ response }, next) {
    if (!response.ok) {
      response.clone().text().then((bodyText) => {
        console.error(`Network Error: ${response.status} (${response.statusText}) - ${bodyText}`);
        next();
      });
    } else {
      response.clone().json().then(({ errors }) => {
        if (errors) {
          console.error('GraphQL Errors:', errors.map(e => e.message));
        }
        next();
      });
    }
  }
};


const networkInterface = createNetworkInterface({
  uri: 'http://localhost:4000/graphql',
  dataIdFromObject: o => o.id
});

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};
    }

    AsyncStorage.getItem('token')
      .then((token) => {
        req.options.headers.authorization = `Bearer ${token}`
        next()
      })
      .catch((error) => {
        console.error(error)
        next()
      })
  }
}]);

networkInterface.useAfter([logErrors]);

const client = new ApolloClient({
  networkInterface
});

export default client;