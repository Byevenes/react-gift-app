import React from 'react';
import ReactDOM from 'react-dom';
// import PrimeraApp from './PrimeraApp'
import GifExpertApp from './GifExpertApp.js';

import './index.css';

const divRoot = document.querySelector('#app');

// ReactDOM.render( <PrimeraApp saludo="Hola, Soy Goku" />  , divRoot );
ReactDOM.render(<GifExpertApp />, divRoot);
