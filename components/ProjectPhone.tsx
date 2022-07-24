import React, { HTMLAttributes } from 'react';
import Image, { StaticImageData } from 'next/image';
import SubmitIcon from '../public/submit-icon.svg';

type ProjectOverlayProps = HTMLAttributes<HTMLParagraphElement> & {
  image: StaticImageData;
  title: string;
  link: string;
};

const ProjectPhone: React.FC<ProjectOverlayProps> = ({
  image,
  title,
  children,
  link,
}) => {
  return (
    <div>
      <h2 className="mb-32">{title}</h2>
      <div className="w-full min-h-[220px]">
        <div className="p-5 relative bg-infrastructureAmbulance min-h-[100px]">
          <div className="absolute top-30">
            <Image src={image} alt="infrastructure ambulance" />
          </div>
        </div>
      </div>
      <p>{children}</p>

      <a
        target={'_blank'}
        rel="noreferrer"
        href={link}
        className="
          block
          mt-32
          px-[48px]
          py-[24px]
          bg-gray-700
          rounded-full
          group
          smooth-shadow
          hover:px-[40px]
          w-full
          lg:w-fit
          mb-64
        "
      >
        <p className="text-gray-100 flex items-center justify-center">
          <span className="mr-16 child">Open Project</span>
          <Image src={SubmitIcon} width={30} height={30} alt="submit icon" />
        </p>
      </a>
    </div>
  );
};

export default ProjectPhone;
