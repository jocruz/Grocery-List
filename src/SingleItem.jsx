import React, { useState } from "react";

const SingleItem = ({ item, deleteItem, editItem }) => {
  const [isChecked, setCheck] = useState(item.completed);

  const fontChange = isChecked ? { textDecoration: "line-through" } : {};
  const italicized = () => {
    isChecked ? setCheck(false) : setCheck(true);
  };

  return (
    <div>
      <input
        type="checkbox"
        onChange={italicized}
        onClick={() => editItem(item.id)}
      ></input>
      <p style={fontChange}>{item.name}</p>
      <button type="button" className="btn" onClick={() => deleteItem(item)}>
        Delete
      </button>
    </div>
  );
};

export default SingleItem;
