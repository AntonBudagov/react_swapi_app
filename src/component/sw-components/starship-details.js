import ItemDetails, {Record} from "../item-details";
import React from "react";

import {withSwapiService} from '../hoc-helper';

const StarShipDetails = (props) => {
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


export default withSwapiService(mapMethodsToProps)(StarShipDetails);
