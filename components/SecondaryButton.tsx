import React, { HTMLAttributes } from 'react';

type LinkButtonProps = HTMLAttributes<HTMLDivElement> & {};

const LinkButton: React.FC<LinkButtonProps> = ({ children }) => {
  return (
    <button
      className="
      px-[48px]
      py-[24px]
      border-4
      border-gray-100
      rounded-full
      group
      smooth-shadow
      hover:px-[40px]
      "
    >
      <p className="text-gray-100 flex items-center">{children}</p>
    </button>
  );
};

export default LinkButton;
