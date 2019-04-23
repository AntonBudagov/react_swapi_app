import ItemDetails, {Record} from "../item-details";
import React from "react";

import {withSwapiService} from '../hoc-helper';

const StarshipDetails = (props) => {
  return (
    <ItemDetails
      {...props}>
      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="Cost" />
    </ItemDetails>
  )
};


const mapMethodsToProps = (_service) => {
  return {
    getData: _service,
    getImageUrl: _service.getImage
  }
};

// export default withSwapiService(StarshipDetails, mapMethodsToProps);
export default withSwapiService(mapMethodsToProps)(StarshipDetails);


// export default withSwapiService(PlanetDetails, mapMethodsToProps);
//
// import React from 'react';
// import ItemDetails, { Record } from '../item-details';
// import Starship from '../../services/starship';
// //
//
// const apiStarship = new Starship();
//
// const StarshipDetails = ({itemId}) => {
//   return (
//     <ItemDetails
//       itemId={itemId}
//       getData={apiStarship}
//       getImageUrl={apiStarship.getImage}>
//       <Record field="model" label="Model" />
//       <Record field="length" label="Length" />
//       <Record field="costInCredits" label="Cost" />
//     </ItemDetails>
//   )
// };

// export {
//   StarshipDetails
// }