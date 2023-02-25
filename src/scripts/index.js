import 'regenerator-runtime';
// styling
import '../styles/style.css';
import '../styles/responsive.css';
// import DATA from '../DATA.json';
// console.log(DATA);
// js
import App from './views/App';
import swRegister from './utils/sw-register';
import { WebSocketInitiator } from './utils/websocket-initiator';
import CONFIG from './globals/config';
// comps
import './components/navbar';
import './components/hero';
import './components/footer-part';

const app = new App({
  button: document.querySelector('.menu'),
  drawer: document.querySelector('.nav-list'),
  content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  document.querySelector('.container').scrollIntoView();
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
  WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});
