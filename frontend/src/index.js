import React from 'react';
import ReactDOM from 'react-dom';
import { Dapp } from "./components/Dapp";

// import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <React.StrictMode>
    <Dapp />
  </React.StrictMode>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));