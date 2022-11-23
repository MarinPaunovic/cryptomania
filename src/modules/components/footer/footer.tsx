export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-title fc">
          <div className="footer-title-title f">
            <img
              src={require('images/cryptomania.jpg')}
              className="footer-title-image"
            />
            <span className="footer-title-name">Cryptomania</span>
          </div>
          <div className="footer-title-description">
            <p>
              Cryptomania is learning project and also potential personal app
              for tracking crypto world. Cryptomania will look to improve all
              user's need and request.
            </p>
          </div>
          <p className="footer-title-copyright">
            © 2022 Cryptomania. All Rights Reserved.
          </p>
        </div>
        <div className="footer-community">test</div>
        <div className="footer-explore">test</div>
      </div>
    </footer>
  );
};
