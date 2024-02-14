import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dateInfo = [
  { id: 1, time: "12:20 305 кабинет" },
  { id: 2, time: "16:00 0204 кабинет" },

]

let imgName = [
  { id: 1, name: "https://cdn.pvs-studio.com/import/docx/blog/0710_DevOps_vs_DevSecOps_ru/image2.png?ver=07-27-2023-02-50-26" }
]

let subName = [
  { id: 1, name: "DevOps" },

]

let dialogsData = [
  { id: 1, name: "Ilya" },
  { id: 2, name: "Varya" },
  { id: 3, name: "Artem" },
]

let messagesData = [
  { id: 1, message: "Hi" },
  { id: 2, message: "How are you?" },
  { id: 3, message: "Okey" },
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dateInfo={dateInfo} imgName={imgName} subName={subName} dialogsData={dialogsData} messagesData={messagesData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
