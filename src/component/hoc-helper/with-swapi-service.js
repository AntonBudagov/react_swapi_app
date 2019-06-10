import React from 'react';
import {SwapiServiceConsumer} from '../swapi-service-context';


const withSwapiService = (mapMethodsToProps) => (Wrapped) => {

  return (props) => {
    return (<SwapiServiceConsumer>
      {
        (_service) => {
          if (mapMethodsToProps) {
            const _serviceProps = mapMethodsToProps(_service);
            return (
              <Wrapped {...props}  {..._serviceProps}/>
            )
          }
          return (
            <Wrapped {...props} _service={_service}/>
          )
        }
      }
    </SwapiServiceConsumer>)
  }


};

export default withSwapiService;
