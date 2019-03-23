import React, {Component, useState} from 'react';


import Planet from './../../services/planet';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PersonPage from '../people-page';
import PlanetPage from '../planet-page';
// import ItemList from '../item-list';
// import PersonDetails from '../person-details';

import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';

import './app.css';
import ItemList from "../item-list";
import PersonDetails from "../person-details";


export default class App extends Component {

  _service = new Planet();

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

    return (
      <div className="stardb-app">
        <Header/>
        <div className="container">
          {planet}

          <button
            className="toggle-planet btn btn-warning btn-lg"
            onClick={this.toggleRandomPlanet}>
            Toggle Random Planet
          </button>
          <ErrorButton/>

          <PersonPage/>
          <hr/>
          <PlanetPage/>
          <hr/>

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