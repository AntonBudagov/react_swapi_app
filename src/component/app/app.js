import React, {Component, useState} from 'react';


import Planet from './../../services/planet';
import Person from './../../services/people';
import StarShip from './../../services/starship';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PersonPage from '../people-page';
import PlanetPage from '../planet-page';
// import ItemList from '../item-list';
// import PersonDetails from '../person-details';
import ItemDetails, {Record} from '../item-details'; //common

import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
import ErrorBoundary from '../error-boundary';

import './app.css';
// import ItemList from "../item-list";
import PersonDetails from "../person-details";
import {
  // PersonDetails,
  // PlanetDetails,
  // StarshipDetails,
  PersonList,
  // PlanetList,
  // StarshipList
} from '../sw-components';

export default class App extends Component {

  _service = new Planet();
  _servicePerson = new Person();
  _serviceStarShip = new StarShip()

  state = {
    showRandomPlanet: false,
    selectedPerson: 4
    // hasError: false
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };


  componentDidCatch() {
    console.log('componentDidCatch');
    this.setState({hasError: true});
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator/>
    }
    const planet = this.state.showRandomPlanet ?
      <RandomPlanet/> :
      null;



    const personDetails = (
      <ItemDetails
        itemId={2}
        getData={this._servicePerson}
        getImageUlr={this._servicePerson.getImage}>
        <Record field={"gender"} label={"Gender"}/>
        <Record field={"eyeColor"} label={"Eye Color"}/>
        <Record field={"birthYear"} label={"Birth Year"}/>
        <Record field={"population"} label={"Population"}/>
      </ItemDetails>
      // <PersonDetails personId={11}/>
    )
    const starShipDetails = (
      <ItemDetails
        itemId={9}
        getData={this._serviceStarShip}
        getImageUlr={this._serviceStarShip.getImage}

        // fields={[
        //     {field: 'gender', label: 'Gender'},
        //     {field: 'eyeColor', label: 'Eye Color'}]
        // }
      >
        <Record field={"model"} label={"Model"}/>
        <Record field={"costInCredits"} label={"Cost in Credits"}/>
        <Record field={"length"} label={"Length"}/>
        <Record field={"manufacturer"} label={"Manufacturer"}/>
      </ItemDetails>
      // <PersonDetails personId={4}/>
    )

    return (
      <ErrorBoundary>
        <div className="stardb-app">
          <Header/>


          <div className="container">
            <PersonList/>
            {/*{planet}*/}

            {/*<button*/}
              {/*className="toggle-planet btn btn-warning btn-lg"*/}
              {/*onClick={this.toggleRandomPlanet}>*/}
              {/*Toggle Random Planet*/}
            {/*</button>*/}
            {/*<ErrorButton/>*/}
            {/*<Row left={personDetails} right={starShipDetails}/>*/}
            {/*<PersonPage/>*/}
            {/*<hr/>*/}
            {/*<PlanetPage/>*/}
            {/*<hr/>*/}

            {/*<div className="row mt-4">*/}
            {/*<div className="col-md-6">*/}
            {/*<h1>Planet</h1>*/}
            {/*<ItemList*/}
            {/*getData={this._service._list}*/}
            {/*/>*/}
            {/*</div>*/}
            {/*</div>*/}
          </div>
        </div>
      </ErrorBoundary>
    );
  }
}
const Row = ({left, right}) => {
  return (
    <div className="row mt-4 ">
      <div className="col-md-6">
        {left}
      </div>
      <div className="col-md-6 ">
        {right}
      </div>
    </div>
  );
};
// const App = () => {
// const [showRandomPlanet, toggleRandomPlanet] = useState(false);
//   return (
//     <div>
//       <Header />
//       <RandomPlanet />
//
//       <div className="row mb2">
//         <div className="col-md-6">
//           <ItemList />
//         </div>
//         <div className="col-md-6">
//           <PersonDetails />
//         </div>
//       </div>
//     </div>
//   );
// };
//
// export default App;