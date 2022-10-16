import React, { useState } from "react";
import "./App.css";
import Item from "./components/Item";
import Header from "./components/Header";

function App() {
  // State Hook - `useState`
  const initialvalue = {id:0, value:""};
  const [newItem, setNewItem] = useState(initialvalue);
  const [items, setItems] = useState([]);


  
  // using the previous Snapshot data to add new data in it.
  function addItem() {
    setItems((previtems)=>{
      return [...previtems, newItem]
    })
    setNewItem(initialvalue);
  }

  // using the previous snap shot data to filter the existing data
  function deleteItem(id) {
    setItems((previtems)=>{
        const filteredlist = previtems.filter(data => data.id != id)
        return filteredlist;
    })
  }

  const datacollector = (e) => {
    setNewItem({
      id:Math.floor(Math.random() * 100),
      value: (e.target.value),
    });
  }
  
  return (
    <div className="app">
     
      <Header></Header>

      <input
        type="text"
        placeholder="Add an item..."
        value={newItem.value}
         onChange={datacollector}  
      />

      <button onClick={addItem}>Add item</button>

        
        {items.map((item,index) => {
          return(
            <div>
            <Item key={index}  value = {item}>

          </Item>
          <button  className="delete-button" onClick={() => deleteItem(item.id)}>❌</button>
    
          </div>
          
          
        )})
      }

    </div>
  );
}

export default App;
