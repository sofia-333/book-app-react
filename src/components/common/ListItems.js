import React from 'react';
import uuid from 'react-uuid';


const ListItems = ({ items, isLink, displayAttribute }) => {

  const getUniqueKey = (field) => {
    let key = field + "-" + uuid();
    return key;
  }

  return (
    <div className="text-orange-900">
      {items.map((item) => (
        <div key={getUniqueKey(item[displayAttribute])} className="mb-1">
          {isLink ?
            <a href={item.url}>
              <p>{item[displayAttribute]}</p>
            </a>
            :
            <div>
              {item[displayAttribute]}
            </div>
          }
        </div>
      ))}
    </div>
  );
}

export default ListItems;