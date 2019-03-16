import React, {Component} from 'react';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator'
import People from './../../services/people';

import './item-list.css';


export default class ItemList extends Component {

  _service = new People();
  state = {
    peopleList: [],
    error: false,
    loading: false
  };

  componentDidMount() {
    this._service._list().then((peopleList) => {
      this.setState({
        peopleList
      })
    }).catch(this.onError)
  }

  // onPersonSelected(id) {
  //   console.log(id);
  // }

  renderItems = (arr) => {
    return arr.map((person) => {
      return (
        <li className="list-group-item"
            key={person.id}
        onClick={() => {this.props.onItemSelected(person.id)}}>
          {person.name}

        </li>
      )
    })

  };


  render() {
    const {peopleList, loading, error} = this.state;

    const hasData = !(loading || error)

    const isError = error ? <ErrorIndicator/> : null;
    const spinner = loading ? <Spinner/> : null;

    return (
      <ul className="item-list list-group">
        {this.renderItems(peopleList)}
      </ul>
    );
  }
}
