import React from 'react';
import ItemList from '../item-list';
import { withData } from '../hoc-helper';
import People from '../../services/people';
import useData  from '../hoc-helper/useData'

const apiPeople = new People();

// const {
//   getAllPeople,
//   getAllStarships,
//   getAllPlanets
// } = swapiService;

const withChildFunction = (Wrapped, fn) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    )
  };
};

// renderItems = (arr) => {
//   return arr.map((person) => {
//     const label = this.props.children(person)
//     return (
//       <li className="list-group-item"
//           key={person.id}
//           onClick={() => {
//             this.props.onItemSelected(person.id)
//           }}>
//         {/*{person.name}*/}
//         {label}
//
//       </li>
//     )
//   })
//
// };

const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ model, name}) => <span>{name} ({model})</span>;

// const PersonList = withData(withChildFunction(ItemList, renderName), apiPeople._list);
const PersonList = withData(
  (props) => (
    <ItemList {...props}>
      {/*{renderName}*/}
      {({name}) => name }
    </ItemList>
  ),
  apiPeople._list
);

// const PlanetList = () => {};
//
// const StarshipList = () => {};

export {
  PersonList,
  // PlanetList,
  // StarshipList
};
