import './App.css';
import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';


const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}




export default App;

