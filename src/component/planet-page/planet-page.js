import React, {Component} from 'react';

import './planet-page.css';
import ItemList from "../item-list";
import PlanetDetails from "../planet-details";
import ErrorIndicator from "../error-indicator";
import Planet from "../../services/planet";




export default class PlanetPage extends Component {

  _service = new Planet();

  state = {
    selectedPlanet: 3,
    hasError: false
  };

  componentDidCatch() {
    this.setState({
      hasError: true
    })
  }

  onPlanetSelected = (id) => {
    console.log(id);
    this.setState({
      selectedPlanet: id
    })
  };
  // old
  // <ItemList
  // onItemSelected={this.onPlanetSelected}
  // getData={this._service._list}
  // renderItem={({name}, {diameter}) => <span>{name} <b>({diameter})</b></span>}/>
  render() {
    const itemList = (
    <ItemList
      onItemSelected={this.onPlanetSelected}
      getData={this._service._list}
    >
      {(i) => (
        <span>{i.name} <b>({i.diameter})</b></span>
      )}
    </ItemList>
    );
    const planetDetails = (
      <PlanetDetails planetId={this.state.selectedPlanet}/>
    );

    if (this.state.hasError) {
      return (
        <div className="row mt-4">
          <div className="col-md-12">
            <div className="card">
              <ErrorIndicator/>
            </div>
          </div>

        </div>
      )
    }

    return <Row left={itemList} right={planetDetails}/>;
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