import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ListItemBig from './components/pages/ListItemBig'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/country/:name' element={<ListItemBig />} />
    </Routes>
  </BrowserRouter>
);

