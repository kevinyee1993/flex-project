import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';


//TODO:
//import backend axios requests here to window and test them out
//like how you tested out ajax requests before
document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  ReactDOM.render(<Root />, root);
});
