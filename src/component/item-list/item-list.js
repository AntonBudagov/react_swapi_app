import React from 'react';

import './item-list.css';


const ItemList = (props) => {

  const {data, onItemSelected, children: renderLabel } = props;

  const items = data.map((item) => {
    // const label = props.children(item)
    const { id } = item;
    const label = renderLabel(item);
    return (
      <li className="list-group-item"
          key={id}
          onClick={() => {
            onItemSelected(id)
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

ItemList.defaultProps = {
  onItemSelected: () => {}
};
// logic item list
export default ItemList
// export default withData(ItemList)
// withData(ItemList, apiPeople._list);