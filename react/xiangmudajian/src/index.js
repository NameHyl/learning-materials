import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';

import Communication from './Communication';

import Hooks from './Hooks';

import LuYou from './RouterPath/LuYou';

import TwoLuYou from './RouterPath/TwoLuYou';

import MobxPlay from "./Mobx/MobxPlay.js";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 严格模式节点==>会影响useEffect的执行时机 <React.StrictMode></React.StrictMode>
  // <App />
  // <Communication />
  // <Hooks />
  // <LuYou />
  <TwoLuYou />
  // <MobxPlay />
);

