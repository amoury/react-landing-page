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
    return <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => this.percentage()}>
            <div className="discount_porcentage">
              <span>{`${this.state.discountStart}%`}</span>
              <span>OFF</span>
            </div>
          </Fade>

          <Slide right>
            <div className="discount_description">
              <h3>Purchase tickets before 30th July</h3>
              <p>
                Delegate passes are for representatives from corporate
                organisations from across industry verticals and investment
                firms except for those who belong to the solution/technology
                provider companies.
              </p>

              <p>
                Exhibitor packages are for
                representatives from startups and SMEs who are looking to
                exhibit at the event. 
                
              </p> 

              <p>
                Supporting partner packages Only for
                representatives from corporate organisations. Not applicable
                to solution/service providers.
              </p>

              <div>
                <MyButton text="Purchase Tickets" back="#ffa800" color="#ffffff" link="https://chkdin.com/events/wbs-dubai" />
              </div>
            </div>
          </Slide>
        </div>
      </div>;
  }
}

export default Discount;