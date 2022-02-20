import hello from "./hello.js";
import world from "./world.js";
import './style.css';
import './main.css';
import logo from './image/icon.svg';

const image = `<img width="40px" src="${logo}" alt='logo'>`
document.querySelector('#root').innerHTML = image + hello + ' ' + world;
