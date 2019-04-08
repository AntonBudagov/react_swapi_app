import React from 'react';


// import People from './../../services/people';

import './item-list.css';
import {withData} from '../hoc-helper';

const ItemList = (props) => {


  const {data, onItemSelected, children: renderLabel} = props;
  const items = data.map((item) => {
    // const label = this.props.children(item)
    const label = renderLabel(item);
    return (
      <li className="list-group-item"
          key={item.id}
          onClick={() => {
            onItemSelected(item.id)
          }}>
        {/*{person.name}*/}
        {label}

      </li>
    )
  });

  return (
    <ul className="item-list list-group">
      {items}
    </ul>
  );


  // renderItems = (arr) => {
  //   return arr.map((person) => {
  //     const label = this.props.children(person)
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
  //
  // };
  // _service = new People();
  // state = {
  //   itemList: [],
  //   error: false,
  //   loading: false
  // };

  // componentDidMount() {
  //   const  { getData } = this.props;
  //
  //   getData().then((itemList) => {
  //     this.setState({
  //       itemList
  //     })
  //   }).catch(this.onError)
  // }
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





};
// logic item list
export default withData(ItemList)
// const withData = (View, getData) => {
//   return class extends Component {
//     state = {
//       itemList: [],
//       error: false,
//       loading: false
//     };
//
//     componentDidMount() {
//       const  { getData } = this.props;
//
//       getData().then((itemList) => {
//         this.setState({
//           itemList
//         })
//       }).catch(this.onError)
//     }
//
//     render() {
//       const {itemList, loading, error} = this.state;
//
//       const hasData = !(loading || error)
//
//       const isError = error ? <ErrorIndicator/> : null;
//       const spinner = loading ? <Spinner/> : null;
//
//       return <View {...this.props} data={itemList}/>
//     }
//   }
// };
//
// export default withData(ItemList)