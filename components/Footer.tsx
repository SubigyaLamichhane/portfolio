import React from 'react';
import Image from 'next/image';
import GitHubLogo from '../public/github-logo.svg';

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer className="bg-blank">
      <div className="max flex flex-col-reverse items-center md:flex-row md:justify-between py-5">
        <p className="text-sm text-center">
          Copyright Subigya Lamichhane 2022. All rights reserved.
        </p>
        <div>
          <a
            href="https://www.github.com/subigyalamichhane"
            target={'_blank'}
            rel="noreferrer"
          >
            <Image src={GitHubLogo} width={23} height={23} alt="github" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
