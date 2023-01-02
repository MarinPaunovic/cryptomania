export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper main-align">
        <div className="footer-title fc">
          <div className="footer-title-title f">
            <img src={require('images/cryptomania.jpg')} className="footer-title-image" />
            <span className="footer-title-name">Cryptomania</span>
          </div>
          <div className="footer-title-description">
            <p>
              Cryptomania is learning project and also potential personal app for tracking crypto
              world. <strong>Cryptomania is learning project</strong> and it's only for educational
              purposes!
            </p>
          </div>
          <p className="footer-title-copyright">© 2022 Cryptomania. All Rights Reserved.</p>
        </div>
        <div className="footer-community">test</div>
        <div className="footer-explore">test</div>
      </div>
    </footer>
  );
};
