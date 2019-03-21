import React, {Component, useState} from 'react';



import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';

import './app.css';

export default class App extends Component {

  state = {
    showRandomPlanet: false,
    selectedPerson: 4,
    // hasError: false
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  onPersonSelected = (id) => {
    console.log(id);
    this.setState({
      selectedPerson: id
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

          <div className="row mt-4">
            <div className="col-md-6">
              <ItemList onItemSelected={this.onPersonSelected}/>
            </div>
            <div className="col-md-6">
              <PersonDetails personId={this.state.selectedPerson}/>
            </div>
          </div>
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