import React from 'react';
import PropTypes from 'prop-types';
import './item-list.css';

const ItemList = (props) => {

  const {data, onItemSelected, children: renderLabel} = props;

  const items = data.map((item) => {
    // const label = props.children(item)
    const {id} = item;
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

ItemList.propsType = {
  onItemSelected: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.func.isRequired
};
// logic item list
export default ItemList
