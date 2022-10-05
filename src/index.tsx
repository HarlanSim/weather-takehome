import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/home';
import './styles/home';
import './styles/header';
import './styles/weather';
import './styles/icon';
import '@fontsource/teko';
import '@fontsource/montserrat';

const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(<Home />);
