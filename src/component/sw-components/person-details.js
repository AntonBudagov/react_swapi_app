import ItemDetails, {Record} from "../item-details";
import React from "react";

import {withSwapiService} from '../hoc-helper';

const PersonDetails = ({itemId, _service}) => {

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


// export default withSwapiService(PersonDetails);
// первый вызов фуникции = () которая вызовет другую
export default withSwapiService(false)(PersonDetails);
// export default withSwapiService(mapMethodsToProps)(PlanetDetails);