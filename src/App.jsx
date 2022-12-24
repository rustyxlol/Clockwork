import { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Content from './components/Content/Content';
import './App.css';

function App() {
  const [dateValue, setDateValue] = useState(new Date());

  return (
    <div className="App">
      <Header date={dateValue} />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
