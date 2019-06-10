import React from 'react';
import {StarShipList} from '../sw-components';
import {withRouter} from 'react-router-dom';


const StarshipsPage = ({history}) => {

  return (
    <StarShipList
      onItemSelected={(id) => history.push(id)}/>
  )
};
export default withRouter(StarshipsPage)