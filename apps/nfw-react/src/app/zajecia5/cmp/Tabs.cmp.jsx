import React, { useState } from 'react';

export const Tabs = props => {
  const [active, setActive] = useState(null);
  return (
    <>
      <div>
        {
          props.elements.map(element => (
            <div onClick={() => setActive(element)}>
              {props.renderTab(element)}
            </div>
          ))
        }
      </div>
      {props.children(active)}
    </>
  )
}