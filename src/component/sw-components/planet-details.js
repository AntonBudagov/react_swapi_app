import ItemDetails, {Record} from "../item-details";
import React from "react";

import Planet from '../../services/planet';

const apiPlanet = new Planet();

//
const PlanetDetails = ({itemId}) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={apiPlanet}
      getImageUlr={apiPlanet.getImage}>
      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="Rotation Period" />
      <Record field="diameter" label="Diameter" />
    </ItemDetails>
  )
};

export {PlanetDetails}