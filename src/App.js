import './App.css';
import React, { useEffect } from 'react'
import Item from "./components/Item"
import Api from "./services/Api";
import Header from './components/Header';

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
      <Header/>
      <Item/>
    </div>
  );
}

export default App;
