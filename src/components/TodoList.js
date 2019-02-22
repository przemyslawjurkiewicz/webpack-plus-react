import React from 'react';
import style from './TodoList.css';

const List = props => {
  return (
    <ul className={style.List}>
      {(props.list || []).map(item => (
        <li key={item.id}>
          {item.text}
          <button onClick={()=>props.remove(item.id)}>-</button>
        </li>
      ))}
    </ul>
  );
};

export default List;
