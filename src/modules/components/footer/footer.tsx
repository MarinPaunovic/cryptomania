import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper g main-align">
        <div className="footer__title fc">
          <div className="footer__title-container f">
            <img
              src={require('images/cryptomania.jpg')}
              alt="crypto"
              className="footer__title-img"
            />
            <h1 className="footer__title-name">Cryptomania</h1>
          </div>
          <p className="footer__description">
            Cryptomania is learning project and also potential personal app for tracking crypto
            world. Cryptomania is learning project and it's only for educational purposes!
          </p>
          <p className="footer__copyright">&copy; 2022 Cryptomania. All Rights Reserved.</p>
        </div>
        <div className="footer__explore f">
          <p className="footer_explore-title"> Some useful content/links here </p>
        </div>
        <div className="footer__community fc aic">
          <p className="footer__community-title ffam-content">
            You can also check social media of coingecko
          </p>
          <div className="footer__social-links">
            <a href="https://www.facebook.com/coingecko/" className="footer__social-btn">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://twitter.com/coingecko" className="footer__social-btn">
              <FontAwesomeIcon icon={faTwitterSquare} />
            </a>
            <a href="https://www.instagram.com/coingecko/" className="footer__social-btn">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com/company/coingecko/" className="footer__social-btn">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
