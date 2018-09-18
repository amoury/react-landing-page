import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import MyButton from '../UI/Button';

class Discount extends Component {

  state = {
    discountStart: 0,
    discountEnd: 30
  }

  percentage = () => {
    const { discountStart, discountEnd } = this.state;

    if(discountStart < discountEnd) {
      this.setState({
        discountStart: discountStart + 1
      })
    }
  }

  componentDidUpdate = () => {
    setTimeout(() => { this.percentage()}, 30)
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">


          <Fade
            onReveal={() => this.percentage()}
          >
            <div className="discount_porcentage">
              <span>{`${this.state.discountStart}%`}</span>
              <span>OFF</span>
            </div>
          </Fade>

          <Slide right>
            <div className="discount_description">
              <h3>Purchase tickets before 30th July</h3>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit fuga temporibus, nostrum veritatis quia nam quam odit hic eveniet dicta? Distinctio incidunt possimus debitis, expedita deserunt esse aliquam necessitatibus animi.  </p>

              <div>
                <MyButton text="Purchase Tickets" back="#ffa800" color="#ffffff" link="http://google.com" />
              </div>
            </div>
          </Slide>


        </div>
      </div>
    )
  }
}

export default Discount;