import React from 'react';
import '../../public/styles/index.scss';

const Footer = () => {
  return (
    window.location.href.indexOf('RapMap') !== -1 && (
      <div className="footerDiv">
        <h6>© 2019 Bad Grey. All Rights Reserved.</h6>
      </div>
    )
  );
};

export default Footer;
