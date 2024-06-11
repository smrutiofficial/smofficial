import React from 'react';

const DynamicList = ({ count }:{count:number}) => {
  const listItems = [];

  for (let i = 1; i <= count; i++) {
    listItems.push(<ul key={i}>{i}</ul>);
  }

  return (
    <div className="flex flex-row gap-4">
      {listItems}
    </div>
  );
};

export default DynamicList;
