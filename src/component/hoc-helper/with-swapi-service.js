import React from 'react';
import {SwapiServiceConsumer} from '../swapi-service-context';


const withSwapiService = (Wrapped) => {

  return (props) => {
    return (<SwapiServiceConsumer>
      {
        (_service) => {
          return (
            <Wrapped {...props} _service={_service}/>
          )
        }
      }
    </SwapiServiceConsumer>)
  }


};

export default withSwapiService;

//
// return (props) => {
//   return (
//     <SwapiServiceConsumer>
//       {
//         (swapiService) => {
//           const serviceProps = mapMethodsToProps(swapiService);
//
//           return (
//             <Wrapped {...props} {...serviceProps} />
//           );
//         }
//       }
//     </SwapiServiceConsumer>
//   );
// }