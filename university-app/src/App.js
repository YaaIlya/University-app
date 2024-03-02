import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ContentContainer from './components/Content/ContentContainer';
import UsersContainer from './components/Users/UsersContainer';


const App = () => {


  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/Content/*" element={<ContentContainer />} />
            <Route path="/Dialogs/*" element={<DialogsContainer />} />
            <Route path="/Users/*" element={<UsersContainer />} />
          </Routes>
        </div>
        <Footer />
      </div >
    </BrowserRouter>
  );
}

export default App;

