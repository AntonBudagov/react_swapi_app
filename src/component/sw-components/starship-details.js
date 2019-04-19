import React from 'react';
import ItemDetails, { Record } from '../item-details';
import Starship from '../../services/starship';
//

const apiStarship = new Starship();

const StarshipDetails = ({itemId}) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={apiStarship}
      getImageUlr={apiStarship.getImage}>
      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="Cost" />
    </ItemDetails>
  )
};

export {
  StarshipDetails
}
