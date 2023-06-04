import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const bio = this.props.data.bio;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">            
            <div className="nine columns main-col">
              <h2>About Me</h2>

              <p>{bio}</p>              
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
