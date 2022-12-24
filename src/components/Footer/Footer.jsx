import React from 'react';
import { IconBrandGithub } from '@tabler/icons';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer__container">
      <a href="https://github.com/rustyxlol">
        <IconBrandGithub size={26} color="gray" stroke={2} />
      </a>
    </div>
  );
};

export default Footer;
