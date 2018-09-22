import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import WordCard from './WordCard';


const word = "Supanut Laddayam";
class App extends Component {
  render() {
    return (
    <div>
     <WordCard value= "supanut"/>
    </div>
    );
   }
  }


export default App;
