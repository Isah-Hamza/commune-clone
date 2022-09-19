import React from "react";
import { useNavigate} from 'react-router-dom'
import "../styles/payment-confirmation.css";

import backIcon from '../assets/icons8-back-50.png';
import brandIcon from '../assets/icons8-bbb-50.png';
import creditCard from '../assets/icons8-credit-card-50.png';
import picture from '../assets/icons8-picture-50.png';
import signal from '../assets/icons8-signal-50.png';
import dollarCoin from '../assets/icons8-dollar-coin-50.png';

const PaymentConfirmation = () => {
    const navigate = useNavigate();
  return (
    <div class="card-container">
      <section class="confirmation-card">
        <div class="header" onClick={() => navigate('/')}>
          <img src={backIcon} alt="" />
          <h3 className="font-semibold">Confirm Order</h3>
        </div>
        <div class="total-cost">
          <p>Total Cost</p>
          <h3 className="font-semibold">$128.00</h3>
        </div>
        <div class="stock-bought">
          <p>Stock you buy</p>
          <div>
            <div class="item-bought">
              <div>
                <span class="brand-logo">
                  <img src={brandIcon} alt="" />
                </span>
                <div>
                  <p>icici bank</p>
                  <p>icici</p>
                </div>
              </div>
              <h3>$127.00</h3>
            </div>
          </div>
        </div>
        <div class="payment-method">
          <p>Payment Method</p>
          <div>
            <img src={creditCard} alt="creditCard" />
            <div>
              <p>Sunder Pichai</p>
              <p>**************3432</p>
            </div>
          </div>
        </div>
        <div class="payment-details">
          <p>Payment Details</p>
          <div>
            <div>
              <div>
                <img src={picture} alt="" />
                <p>Funding Source</p>
              </div>
              <p class="blue">GoGrow</p>
            </div>
            <div>
              <div>
                <img src={signal} alt="signal" />
                <p>Approx. share price</p>
              </div>
              <p>$127.00</p>
            </div>
            <div>
              <div>
                <img src={signal} alt="signal" />
                <p>Approx. share </p>
              </div>
              <p>0.003</p>
            </div>
            <div>
              <div>
                <img src={dollarCoin} alt="" />
                <p>Fee </p>
              </div>
              <p>$1</p>
            </div>
          </div>
        </div>
        <div class="confirm-btn">
          <button>Confirm</button>
        </div>
      </section>
    </div>
  );
};

export default PaymentConfirmation;
