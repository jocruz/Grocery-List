import React, { useState } from "react";
import { toast } from "react-toastify";
console.log("Form.jsx file is loaded");
const Form = ({ setItems,addItem }) => {
  const [newItemName, setNewItemName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItemName === "") {
      toast.error("This is empty, type something in!");
      return;
    }
    // setItems((prevItems) => [...prevItems, newItemName]);
    addItem(newItemName)
    toast.success("Item has been successfully added");
    setNewItemName("")
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter Item Here"
          value={newItemName}
          onChange={(e) => {
            setNewItemName(e.target.value);
          }}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
