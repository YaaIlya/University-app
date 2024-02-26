import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';


const App = (props) => {



  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/Content/*" element={<Content state={props.state} dispatch={props.dispatch} />} />
            <Route path="/Dialogs/*" element={<Dialogs state={props.state} dispatch={props.dispatch} />} />
          </Routes>
        </div>
        <Footer />
      </div >
    </BrowserRouter>
  );
}

export default App;

