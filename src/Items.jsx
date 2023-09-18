import React from "react";
import SingleItem from "./SingleItem";

const Items = ({ items, deleteItem, editItem}) => {
  return (
    <div>
      {items.map((item,index) => {
        return <SingleItem key= {index}item={item} deleteItem={deleteItem} editItem={editItem} />;
      })}
    </div>
  );
};

export default Items;
