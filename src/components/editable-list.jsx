import { useState } from "react";

import "./editable-list.css";

export default function EditableList() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddItem = () => {
    setItems([...items, inputValue]);
    setInputValue("");
  };

  const handleDeleteItem = (i) => {
    setItems(items.filter((item) => item != i));
  };

  const handleInputValueChange = (event) => {
    setInputValue(event.target.value);
  };

  const itemList = items.map((item) => (
    <div className="item-class">
      <li key={item}>{item}</li>
      <button onClick={() => handleDeleteItem(item)}>❌</button>
    </div>
  ));

  return (
    <>
      <div className="editable-list">
        <ul>{itemList}</ul>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputValueChange}
        />
        <button onClick={handleAddItem}>➕</button>
      </div>
    </>
  );
}
