import React from 'react';
import {StarshipList} from '../sw-components';
import {withRouter} from 'react-router-dom';

// import React, {Component} from 'react';
// import Row from '../row';
// import {StarshipList, StarshipDetails} from '../sw-components'

// export default class StarshipsPage extends Component {
//
//   state = {
//     selectedItem: null
//   };
//
//   onItemSelected = (selectedItem) => {
//     this.setState({selectedItem})
//   };
//
//   render() {
//     const {selectedItem} = this.state;
//     return (
//       <Row
//         left={<StarshipList onItemSelected={this.onItemSelected}/>}
//         right={<StarshipDetails itemId={selectedItem}/>}/>
//     )
//   }
// }
const StarshipsPage = ({history}) => {
  return (
    <StarshipList
      onItemSelected={(itemId) => {
        history.push(`/starship/${itemId}`);
    }}/>
  )
};
export default withRouter(StarshipsPage)