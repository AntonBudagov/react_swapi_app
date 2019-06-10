import React from 'react';
import ItemList from '../item-list';
import {withData, withSwapiService, withChildFunction, compose} from '../hoc-helper';



const renderName = ({name}) => <span>{name}</span>;
// const renderModelAndName = ({costInCredits, name}) => <span>{name} <b>({costInCredits})</b></span>;

const mapMethodToProps = (swapiService) => {
  return {
    getData: swapiService._list
  }
};

const PersonList = withSwapiService(mapMethodToProps)(
  withData(
    withChildFunction(renderName)(
      ItemList)));

const PlanetList = compose(
  withSwapiService(mapMethodToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);


const StarShipList = compose(
  withSwapiService(mapMethodToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);


export {
  PersonList,
  PlanetList,
  StarShipList,
};
