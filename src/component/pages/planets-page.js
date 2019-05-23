import React, { useEffect, useState } from 'react';

import Row from '../row';
import { PlanetList, PlanetDetails } from '../sw-components'

const PlanetsPage = () => {

    const [selectedItem, setSelectedItem] = useState(null);
    const [loading, setLoading] = useState(false);

    const onItemSelected = (selectedItem) => {
        setLoading(true);
        setSelectedItem(selectedItem);

    };

    useEffect(() => {
        onItemSelected();
        setLoading(false);
    }, [selectedItem, loading]);


    return (
        <Row
            left={<PlanetList onItemSelected={onItemSelected}/>}
            right={<PlanetDetails itemId={selectedItem}/>}/>
    )

};
export default PlanetsPage;

// export default class PlanetsPage extends Component {
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
//         left={<PlanetList onItemSelected={this.onItemSelected}/>}
//         right={<PlanetDetails itemId={selectedItem}/>}/>
//     )
//   }
// }
