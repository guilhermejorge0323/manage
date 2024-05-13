import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './css/style.css';
import navbarControl from './modules/navbarControl.js';

const button = document.querySelector('.btn-hamburger');
const navbar = document.querySelector('#area-menu-nav');
const overlay = document.querySelector('.overlay');
const html = document.querySelector('html');
const img = document.querySelector('#img-hamburger');

navbarControl(button,navbar,overlay,html,img);