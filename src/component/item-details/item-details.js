import React, { Component } from 'react';

import ErrorButton from '../error-button/error-button';
// import SwapiService from '../../services/starship';

import './item-details.css';
//
export const Record = ({item, field, label}) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  )
};
// const Record = ({ item, field, label }) => {
//   return (
//     <li className="list-group-item">
//       <span className="term">{label}</span>
//       <span>{ item[field] }</span>
//     </li>
//   );
// };
//
// export {
//   Record
// };


export default class ItemDetails extends Component {

  // swapiService = new SwapiService();

  state = {
    item: null,
    image: null
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData, getImageUlr, fields } = this.props;
    if (!itemId) {
      return;
    }


    getData._read(itemId)
      .then((item) => {
        this.setState({
          item,
          image: getImageUlr(item)});
      });
  }


  render() {

    const { item, image } = this.state;
    if (!item) {
      return <span>Select a item from a list</span>;
    }

    const { id, name, gender,
              birthYear, eyeColor } = item;

    return (
      <div className="item-details card">
        <img className="item-image"
          src={image}
          alt="item"/>

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {
             React.Children.map(this.props.children, (child, index) => {
               // return (<Record item={child.item} label="1" />)
               return React.cloneElement(child, {item})
               // return <li>{child}</li>
             })
            }

            {/*<li className="list-group-item">*/}
              {/*<span className="term">Gender</span>*/}
              {/*<span>{gender}</span>*/}
            {/*</li>*/}
            {/*<li className="list-group-item">*/}
              {/*<span className="term">Birth Year</span>*/}
              {/*<span>{birthYear}</span>*/}
            {/*</li>*/}
            {/*<li className="list-group-item">*/}
              {/*<span className="term">Eye Color</span>*/}
              {/*<span>{eyeColor}</span>*/}
            {/*</li>*/}
          </ul>
          <br/>
          <ErrorButton/>
        </div>
      </div>
    );
  }
}
