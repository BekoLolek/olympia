import React, { Component } from "react";
import Slide from "react-reveal";

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const plans = this.props.data.map(function (plans) {
      return (
        <div key={plans.name}>
          <h3>{plans.name}</h3>          
          <p>RAM: {plans.ram}</p>
          <p>Storage: {plans.storage}</p>
          <p>Cores: {plans.cores}</p>
          <p>Players: {plans.players}</p>
          <p>Price: {plans.price}</p>
        </div>
      );
    });

    

    return (
      <section id="resume">
        <Slide left duration={500}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Plans</span>
              </h1>
            </div>

            
            <div className="six column centered">
              <div className="row item">
                <div className="">{plans}</div>
              </div>
            </div>
          </div>
        </Slide>        
      </section>
    );
  }
}

export default Resume;
