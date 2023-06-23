// import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';
// import Message from './components/Message';
import Counter from './components/Counter';
import Resume from './components/Resume';
import FunctionEvent from './components/FunctionEvent';
import ClassEvent from './components/ClassEvent';
import FunctionalCounter from './components/FunctionalCounter';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Profile name = "Bintang" lastName = "Ramadhan" />
      <Counter />
      <Resume name = "Bintang" lastName = "Ramadhan"/>
      <FunctionEvent />
      <ClassEvent />
      <FunctionalCounter />
    </div>
  );
}

export default App;
