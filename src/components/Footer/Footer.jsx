import React from "react";
import Ig from "../../asset/ig";
import Fb from "../../asset/fb";
import Youtobe from "../../asset/youtobe";

import './Footer.scss'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h2 className="footer__logo">bikcraft</h2>
        <div className="footer__contact">
          <h2>contact</h2>
          <div className="footer__contact__box">
            <p>+55 22 99999-9999 </p>
            <p>contact@bikcraft.com</p>
          </div>
          <div className="footer__contact__box">
            <p>Rua Ali Perto, 42 - Botafogo</p>
            <p>Rio de Janeiro - RJ</p>
          </div>
          <div className="footer__contact__social">
            <Ig />
            <Fb />
            <Youtobe />
          </div>
        </div>
        <div className="footer__info">
          <h2>Information</h2>
         <div className = "footer__info__box">
            <p>Bicycles</p>
            <p>Insurance</p>
            <p>Contact</p>
            <p>Terms and conditions</p>
         </div >
        </div>
      </div>
      <p className="footer__close">Bikcraft © Alguns rireitos reservados.</p>
    </footer>
  );
};

export default Footer;
