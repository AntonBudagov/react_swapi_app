import React from 'react';
import ItemList from '../item-list';
import { withData, withSwapiService } from '../hoc-helper';


import People from '../../services/people';
import Planet from '../../services/planet';
import Starship from '../../services/starship';

const apiPeople = new People();
const apiPlanet = new Planet();
const apiStarship = new Starship();

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

const mapMethodToProps = (swapiService) => {
  return {
    getData: swapiService._list
  }
};

const PersonList = withSwapiService(
  withData(
    withChildFunction(ItemList, renderName)),
  mapMethodToProps
);

const PlanetList = withSwapiService(
  withData(
    withChildFunction(ItemList, renderName)),
  mapMethodToProps
);

const StarshipList = withSwapiService(
  withData(
    withChildFunction(ItemList, renderName)),
  mapMethodToProps
);

// const mapPersonMethodToProps = (swapiService) => {
//   return {
//     getData: swapiService._list
//   }
// };

// const mapPlanetMethodToProps = (swapiService) => {
//   return {
//     getData: swapiService._list
//   }
// };
//
// const mapStarshipMethodToProps = (swapiService) => {
//   return {
//     getData: swapiService._list
//   }
// };

// const PersonList = withSwapiService(
//   withData(
//     withChildFunction(ItemList, renderName)),
//   mapPersonMethodToProps
// );

// const PlanetList = withSwapiService(
//   withData(
//     withChildFunction(ItemList, renderName)),
//   mapPlanetMethodToProps
// );
//
// const StarshipList = withSwapiService(
//   withData(
//     withChildFunction(ItemList, renderName)),
//   mapStarshipMethodToProps
// );
//----------------------------------------------------------------------------------------------------------------------

// I variant send child
// const PersonList = withData(ItemList, apiPeople._list); // <PersonList>.....child</PersonList>

// II variant send child
// const PlanetList = withData(withChildFunction(ItemList, renderName), apiPlanet._list);
// const StarshipList = withData(withChildFunction(ItemList, renderModelAndName), apiStarship._list);
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
};
