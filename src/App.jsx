import React, { useState } from 'react';
import './App.css';
import { Button } from './components';
import Header from './components/Header';

const App = () => {
  const [flag, setFlag] = useState(false);
 return (
  <div className="App">
    <header className="App-header">
      Zon Tools rendered from React Micro-Service
    </header>
    <Button onClick={() => setFlag(!flag)} name={flag ? "Hide Component" : "Show component"}/>
    {flag && <Header/>}
  </div>
 );
}



export default App;
