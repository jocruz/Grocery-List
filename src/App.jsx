import { useState, useEffect } from "react";
import Form from "./Form";
import Items from "./Items";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { nanoid } from "nanoid";

const App = () => {
  const [items, setItems] = useState(() => {
    const savedItems = JSON.parse(localStorage.getItem("items"));
    return savedItems || [];
  });

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };

    const newItems = [...items, newItem];
    setItems(newItems);
  };

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (itemId === item.id) {
        const newIt = {
          ...item,
          completed: !item.completed,
        };
        return newIt;
      }
      return item;
    });

    setItems(newItems);
  };

    const deleteItem = (listedItem) => {
    const result = items.filter((item) => item !== listedItem);
    setItems([...result]);
    toast.success("Item has been removed successfully");
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);
  return (
    <main>
      <h2>Grocery Bud - Starter</h2>
      <Form setItems={setItems} addItem={addItem} />{" "}
      <Items items={items} deleteItem={deleteItem} editItem={editItem} />
      <ToastContainer position="top-center" />
    </main>
  );
};

export default App;
