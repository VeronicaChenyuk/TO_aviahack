import React, { Component } from "react";

import {
  Link,
  BrowserRouter,
  Route,
} from 'react-router-dom';
import Router from '../routers/Router'
import './Main.css'
import logo from './fly.png'
class Main extends Component {
  render() {
    return (
    <BrowserRouter>
      <div className="main">
        <img src={logo} className='img' ></img>
        <p><a href='/louder'><button type="button" className="btn btn-info">Заполнение ангаров</button></a> </p>
        <p><a href='/settings'><button type="button" className="btn btn-info">Настройка</button></a></p>
        <p><a href='/estimate'><button type="button" className="btn btn-info">Рассчитать</button></a></p>
       
      </div>
      <Router/>
     </BrowserRouter> 
    )
  }
}

export default Main;
