import React from 'react';
//
import ItemDetails, { Record } from '../item-details';
import People from '../../services/people';
import Planet from '../../services/planet';
import Starship from '../../services/starship';
//
const apiPeople = new People();
const apiPlanet = new Planet();
const apiStarship = new Starship();
//
// const {
//   getPerson,
//   getPlanet,
//   getStarship,
//   getPersonImage,
//   getPlanetImage,
//   getStarshipImage
// } = swapiService;

const PersonDetails = ({itemId}) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={apiPeople}
      getImageUlr={apiPeople.getImage}>
      <Record field={"gender"} label={"Gender"}/>
      <Record field={"eyeColor"} label={"Eye Color"}/>
      <Record field={"birthYear"} label={"Birth Year"}/>
      <Record field={"population"} label={"Population"}/>
    </ItemDetails>
  )
};

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
  PersonDetails,
  PlanetDetails,
  StarshipDetails
};
