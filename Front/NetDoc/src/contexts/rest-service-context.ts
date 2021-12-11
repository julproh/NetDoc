import React from 'react';
import { RestService } from '../services/rest-service';

const restService = new RestService();

const {
  Provider: RestServiceProvider,
  Consumer: RestServiceConsumer
} = React.createContext(restService);

export {
    RestServiceProvider,
    RestServiceConsumer
};