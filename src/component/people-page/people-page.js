import React, {Component} from 'react';

import './people-page.css';
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorIndicator from "../error-indicator";


export default class PersonPage extends Component {

  state = {
    selectedPerson: 4,
    hasError: false
  };

  componentDidCatch() {
    this.setState({
      hasError: true
    })
  }

  onPersonSelected = (id) => {
    console.log(id);
    this.setState({
      selectedPerson: id
    })
  };


  render() {
    if (this.state.hasError) {
      return (
        <div className="row mt-4">
          <div className="col-md-12">
            <div className="person-details card">
              <ErrorIndicator/>
            </div>
          </div>

        </div>
      )
    }
    return (
      <div className="row mt-4">
        <div className="col-md-6">
          <ItemList onItemSelected={this.onPersonSelected}/>
        </div>
        <div className="col-md-6">
          <PersonDetails personId={this.state.selectedPerson}/>
        </div>
      </div>
    )
  }
}