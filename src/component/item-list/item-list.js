import React from 'react';

import './item-list.css';

// import {withData} from '../hoc-helper';

const ItemList = (props) => {
  console.log(props);

  const {data, onItemSelected, children: renderLabel } = props;
  const items = data.map((item) => {
    // const label = props.children(item)
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
};
// logic item list
export default ItemList
// export default withData(ItemList)
// withData(ItemList, apiPeople._list);