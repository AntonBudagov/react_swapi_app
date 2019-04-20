import ItemDetails, {Record} from "../item-details";
import React from "react";

import withSwapiService from "../hoc-helper/with-swapi-service";

const _PlanetDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="Rotation Period" />
      <Record field="diameter" label="Diameter" />
    </ItemDetails>
  )
};


const mapMethodsToProps = (_service) => {
  return {
    getData: _service,
    getImageUrl: _service.getImage
  }
};

export default withSwapiService(_PlanetDetails, mapMethodsToProps);