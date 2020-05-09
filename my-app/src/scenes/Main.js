import React, { Component } from "react";
import { BrowserRouter as Router } from 'react-router-dom'
import './Main.css'
import logo from './fly.png'
class Main extends Component {
  render() {
    return (
      <div className="main">
        <img src={logo} className='img' />
        <p><Router><button type="button" className="btn btn-info"><a href='/louder'>Загрузить XLSX</a></button></Router> </p>
        <p><Router><button type="button" className="btn btn-info"><a href='/settings'>Настройка</a></button></Router></p>
        <p><Router><button type="button" className="btn btn-info"><a href='/estimate'>Рассчитать</a></button></Router></p>
      </div>
    )
  }
}

export default Main;
