import React from 'react';
import ItemList from '../item-list';
import { withData, withSwapiService } from '../hoc-helper';


import People from '../../services/people';
import Planet from '../../services/planet';
import Starship from '../../services/starship';

const apiPeople = new People();
const apiPlanet = new Planet();
const apiStarship = new Starship();


// const {
//   getAllPeople,
//   getAllStarships,
//   getAllPlanets
// } = swapiService;
// функция высшего порядка
// мы возращаем новый компонент функцию в качестве children => fn
const withChildFunction = (Wrapped, fn) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    )
  };
};
// example
const listWithChildren =  withChildFunction(
  ItemList,
  ({name}) =>  <span>{name}</span>
);




const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ costInCredits, name}) => <span>{name} <b>({costInCredits})</b></span>;


const mapPersonMethodToProps = (swapiService) => {
  return {
    getData: swapiService._list
  }
};

const _PersonList = withSwapiService(
  withData(
    withChildFunction(ItemList, renderName)),
  mapPersonMethodToProps
  );
//----------------------------------------------------------------------------------------------------------------------

// I variant send child
const PersonList = withData(ItemList, apiPeople._list); // <PersonList>.....child</PersonList>

// II variant send child
const PlanetList = withData(withChildFunction(ItemList, renderName), apiPlanet._list);
const StarshipList = withData(withChildFunction(ItemList, renderModelAndName), apiStarship._list);
// III variant send child
// const StarshipList = withData((props) => (<ItemList {...props}>{({name}) => name }</ItemList>), apiStarship._list);
// const StarshipList = withData(
//   (props) => (
//     <ItemList {...props}>
//       {/*{renderName}*/}
//       {({name}) => name }
//     </ItemList>
//   ),
//   apiStarship._list
// );



export {
  PersonList,
  PlanetList,
  StarshipList,

  _PersonList
};
