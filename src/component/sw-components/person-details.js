import ItemDetails, {Record} from "../item-details";
import React from "react";

// import withSwapiService from '../hoc-helper/with-swapi-service'
import {withSwapiService} from '../hoc-helper';

const _PersonDetails = ({itemId, _service}) => {

  return (
    <ItemDetails
    itemId={itemId}
    getData={_service}
    getImageUrl={_service.getImage}>
    <Record field={"gender"} label={"Gender"}/>
    <Record field={"eyeColor"} label={"Eye Color"}/>
    <Record field={"birthYear"} label={"Birth Year"}/>
    <Record field={"population"} label={"Population"}/>
  </ItemDetails>
  )
};

export default withSwapiService(_PersonDetails);

