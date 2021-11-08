import './App.css';
import React, { useEffect } from 'react'
import Item from "./components/Item"
import Api from "./services/Api";

function App() {
  const api = new Api();


  useEffect(() => {
      console.log("Pide items: ");
      api.
      getItems()
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }, []);


  return (
    <div className="App">
      <Item/>
    </div>
  );
}

export default App;
