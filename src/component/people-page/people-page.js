import React, {Component} from 'react';

import './people-page.css';
import ItemList from "../item-list";
import PersonDetails from "../person-details";

import Person from "../../services/people";
import ErrorBoundary from '../error-boundary';


export default class PersonPage extends Component {

  _service = new Person();

  state = {
    selectedPerson: 4
  };

  // componentDidCatch() {
  //   this.setState({
  //     hasError: true
  //   })
  // }

  onPersonSelected = (id) => {
    console.log(id);
    this.setState({
      selectedPerson: id
    })
  };


  render() {

    // if (this.state.hasError) {
    //   return <ErrorIndicator/>;
    // }
    // new
    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this._service._list}
      >
        {(i) => (
          <span>{i.name} <b>({i.gender})</b></span>
        )}
      </ItemList>
    );
    const personDetails = (
      <PersonDetails personId={this.state.selectedPerson}/>
    );

    return (
      <ErrorBoundary>
        <Row left={itemList} right={personDetails}/>
      </ErrorBoundary>
    )

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