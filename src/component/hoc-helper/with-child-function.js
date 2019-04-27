import React from "react";
// функция высшего порядка
// мы возращаем новый компонент функцию в качестве children => fn
const withChildFunction = (fn) => (Wrapped) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    )
  };
};
export default withChildFunction