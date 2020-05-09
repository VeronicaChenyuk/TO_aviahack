import React, { Component } from "react";
import Fly from './fly2.png'

class Estimate extends Component {
  render() {
    return(
    <div className="estimate">
      <h4>SVO(Шереметьево Москва)</h4>
      <img src={Fly}/>
      <img src={Fly}/>
      <img src={Fly}/>
      <img src={Fly}/>
      <h4>DME (Домодедово Москва)</h4>
      <img src={Fly}/>
      <img src={Fly}/>
      <img src={Fly}/>
      <img src={Fly}/>

    </div>
    )
 }
}// Try to do it

export default Estimate;
