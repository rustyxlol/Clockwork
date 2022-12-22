import './App.css';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import DateInput from './components/Inputs/DateInput';
import Header from './components/Navbar/Header';
import Main from './components/Main/Main';

function App() {
  const [dateValue, setDateValue] = useState(new Date());

  function handleDateChange(date) {
    setDateValue(date);
  }

  return (
    <div className="App">
      <Header date={dateValue} />
      <Main />
    </div>
  );
}

export default App;
