import React, {Component, useState} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Planet from './../../services/planet';
import Person from './../../services/people';
import StarShip from './../../services/starship';

import Header from '../header';
import RandomPlanet from '../random-planet';

import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
import ErrorBoundary from '../error-boundary';

import './app.css';


// Pages
import {PeoplePage, PlanetsPage, StarshipsPage} from '../pages'

import {SwapiServiceProvider} from '../swapi-service-context';

// mock server
import {
  MockPlanet,
  MockPeople,
  MockStarship
} from '../../services/mock/mock-service';

export default class App extends Component {

  // _servicePlanet = new Planet();
  // _servicePerson = new Person();
  // _serviceStarShip = new StarShip();
  // mock service
  // _servicePerson = mockPople;
  // _servicePlanet = mockPlanet;
  // _serviceStarShip = mockStarship;


  state = {
    showRandomPlanet: true,
    selectedPerson: 4,

    // dynamic change service
    _servicePlanet: new Planet(),
    _servicePerson: new Person(),
    _serviceStarShip: new StarShip(),
    // hasError: false
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  serviceChange = () => {
    this.setState(({_servicePlanet, _servicePerson, _serviceStarShip}) => {
      const ServicePlanet = _servicePlanet instanceof Planet ? MockPlanet : Planet;
      const ServicePeople = _servicePerson instanceof Person ? MockPeople : Person;
      const ServiceStarship = _serviceStarShip instanceof StarShip ? MockStarship : StarShip;
      // console.log('switched to ', ServicePlanet.name);
      return {
        _servicePlanet: new ServicePlanet(),
        _servicePerson: new ServicePeople(),
        _serviceStarShip: new ServiceStarship()
      }
    })
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
      <RandomPlanet updateInterval={20000}/> :
      null;

    return (
      <ErrorBoundary>
        <div className="stardb-app">
          <Header onServiceChange={this.serviceChange}/>

          {planet}

          <button
            className="toggle-planet btn btn-warning btn-lg"
            onClick={this.toggleRandomPlanet}>
            Toggle Random Planet
          </button>
          <ErrorButton/>
          <div className="container">

            {/*--------------------------Person--------------------------------------------------------------------*/}
            <Router>
              <Route path="/people" component={() =>
                (<SwapiServiceProvider value={this.state._servicePerson}>
                  <PeoplePage/>
                </SwapiServiceProvider>)
              }/>

              <Route path="/planet" component={() =>
                <SwapiServiceProvider value={this.state._servicePlanet}>
                  <PlanetsPage/>
                </SwapiServiceProvider>
              }/>

              <Route path="/starship" component={() =>
                <SwapiServiceProvider value={this.state._serviceStarShip}>
                  <StarshipsPage/>
                </SwapiServiceProvider>
              }/>

            </Router>
          </div>
        </div>
      </ErrorBoundary>
    );
  }
}
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