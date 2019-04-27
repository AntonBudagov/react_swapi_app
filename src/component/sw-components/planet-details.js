import ItemDetails, {Record} from "../item-details";
import React from "react";

import {withSwapiService} from '../hoc-helper';

const PlanetDetails = (props) => {
  return (
    // мы можем использовать ...props так как уже в методе mapMethodsToProps возращает то что хотим
    <ItemDetails {...props}>
      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="Rotation Period" />
      <Record field="diameter" label="Diameter" />
    </ItemDetails>
  )
};

// выбираем какие части сервиса мы хотим передать, и под какими именами
const mapMethodsToProps = (_service) => {
  return {
    getData: _service,
    getImageUrl: _service.getImage
  }
};

// export default withSwapiService(PlanetDetails, mapMethodsToProps);
export default withSwapiService(mapMethodsToProps)(PlanetDetails);