import React, {Component} from 'react';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator'
// import People from './../../services/people';

import './item-list.css';


export default class ItemList extends Component {

  // _service = new People();
  state = {
    itemList: [],
    error: false,
    loading: false
  };

  componentDidMount() {
    const  { getData } = this.props;

    getData().then((itemList) => {
      this.setState({
        itemList
      })
    }).catch(this.onError)
  }
  // old
  // renderItems = (arr) => {
  //   return arr.map((person) => {
  //     const label = this.props.renderItem(person)
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
  // }

  renderItems = (arr) => {
    return arr.map((person) => {
      const label = this.props.children(person)
      return (
        <li className="list-group-item"
            key={person.id}
            onClick={() => {
              this.props.onItemSelected(person.id)
            }}>
          {/*{person.name}*/}
          {label}

        </li>
      )
    })

  };


  render() {
    const {itemList, loading, error} = this.state;

    const hasData = !(loading || error)

    const isError = error ? <ErrorIndicator/> : null;
    const spinner = loading ? <Spinner/> : null;

    return (
      <ul className="item-list list-group">
        {this.renderItems(itemList)}
      </ul>
    );
  }
}
