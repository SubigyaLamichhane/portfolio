import React, { HTMLAttributes } from 'react';

type LinkButtonProps = HTMLAttributes<HTMLDivElement> & {};

const LinkButton: React.FC<LinkButtonProps> = ({ children, ...props }) => {
  return (
    <div
      className="
      px-[48px]
      py-[24px]
      bg-gradient-to-r 
      from-from
      to-to
      rounded-full
      group
      smooth-shadow
      hover:px-[40px]
      w-full
      lg:w-fit
      "
      {...props}
    >
      <p className="text-gray-100 flex items-center justify-center text-center">
        {children}
      </p>
    </div>
  );
};

export default LinkButton;
