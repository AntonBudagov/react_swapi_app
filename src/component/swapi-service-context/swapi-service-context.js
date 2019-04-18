import React from 'react';

// потребитель => Consumer
const {
  Provider: SwapiServiceProvider,
  Consumer: SwapiServiceConsumer
} = React.createContext();

export {
  SwapiServiceProvider,
  SwapiServiceConsumer
}