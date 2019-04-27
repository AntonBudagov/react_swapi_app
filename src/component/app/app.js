import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

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
import {PeoplePage, PlanetsPage, StarshipsPage, SecretPage, LoginPage} from '../pages';
// details
import StarshipDetails from '../sw-components/starship-details'

import {SwapiServiceProvider} from '../swapi-service-context';

// mock server
import {
  MockPlanet,
  MockPeople,
  MockStarship
} from '../../services/mock/mock-service';


const NotFound = () => {
  return <h2>404</h2>
};
export default class App extends Component {

  // _servicePlanet = new Planet();
  // _servicePerson = new Person();
  // _serviceStarShip = new StarShip();
  // mock service
  // _servicePerson = mockPople;
  // _servicePlanet = mockPlanet;
  // _serviceStarShip = mockStarship;


  state = {
    isLoggedIn: false,

    showRandomPlanet: true,
    selectedPerson: 4,

    // dynamic change service
    _servicePlanet: new Planet(),
    _servicePerson: new Person(),
    _serviceStarShip: new StarShip(),
    // hasError: false
  };

  onLogin = () => {
    this.setState((state) => {
      return {
        isLoggedIn: !state.isLoggedIn
      }
    })
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
      <RandomPlanet updateInterval={20000000}/> :
      null;

    return (
      <ErrorBoundary>
        <Router>
          <div className="stardb-app">
            <Header onServiceChange={this.serviceChange}/>


            {/*<button*/}
            {/*className="toggle-planet btn btn-warning btn-lg"*/}
            {/*onClick={this.toggleRandomPlanet}>*/}
            {/*Toggle Random Planet*/}
            {/*</button>*/}
            {/*<ErrorButton/>*/}
            <div className="container">
              {planet}
              <Switch>
                {/*exact the same exact={true} */}
                <Route path="/" exact={true} render={() => <h2> Welcome to Start</h2>}/>

                <Route path="/people/:id?" component={() =>
                  (<SwapiServiceProvider value={this.state._servicePerson}>
                    <PeoplePage/>
                  </SwapiServiceProvider>)
                }/>

                <Route path="/planet" component={() =>
                  <SwapiServiceProvider value={this.state._servicePlanet}>
                    <PlanetsPage/>
                  </SwapiServiceProvider>
                }/>

                <Route path="/starship" exact component={() =>
                  <SwapiServiceProvider value={this.state._serviceStarShip}>
                    <StarshipsPage/>
                  </SwapiServiceProvider>
                }/>
                {/*details*/}
                <Route path="/starship/:id" exact
                       render={({match}) => <SwapiServiceProvider value={this.state._serviceStarShip}>
                         <StarshipDetails itemId={match.params.id}/>
                       </SwapiServiceProvider>
                       }/>

                <Route path="/login"
                       render={() => (

                         <LoginPage
                           isLoggedIn={this.state.isLoggedIn}
                           onLogin={this.onLogin}
                         />
                       )}/>
                <Route path="/secret"
                       render={() => (
                         <SecretPage isLoggedIn={this.state.isLoggedIn}/>
                       )}
                />

                {/*404 or not found path*/}
                <Route component={NotFound}/>
                {/*also we can add redirect to main page*/}
                {/*<Redirect to="/"/>*/}

              </Switch>
            </div>
          </div>

        </Router>
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