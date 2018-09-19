import React, { Component } from 'react'
import MyButton from '../UI/Button';

import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {
  state = {
    priceBoxes: [
      {
        price: 595,
        position: "Delegate Regular Ticket",
        description: "Access to two days of conference.",
        linkTo: "https://chkdin.com/events/wbs-dubai",
        delay: 500
      },
      {
        price: 795,
        position: "Delegate Executive Ticket",
        description: "Access to two days of Conference + After Party.",
        linkTo: "https://chkdin.com/events/wbs-dubai",
        delay: 0
      },
      {
        price: 1195,
        position: "Delegate VIP Ticket",
        description:
          "Access to two days of Conference + Pre-event and After Party",
        linkTo: "https://chkdin.com/events/wbs-dubai",
        delay: 500
      }
    ]
  };

  showBoxes = () =>
    this.state.priceBoxes.map(box => (
      <Zoom key={box.price} delay={box.delay}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${box.price}</span>
              <span>{box.position}</span>
            </div>
            <div className="pricing_description">{box.description}</div>
            <div className="pricing_buttons">
              <MyButton
                text="Purchase"
                back="#ffa800"
                color="#ffffff"
                link={box.linkTo}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>

          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing