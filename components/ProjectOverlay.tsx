import React, { HTMLAttributes } from 'react';
import Image, { StaticImageData } from 'next/image';
import SubmitIcon from '../public/submit-icon.svg';

type ProjectOverlayProps = HTMLAttributes<HTMLParagraphElement> & {
  image: StaticImageData;
  title: string;
  link: string;
};

const ProjectOverlay: React.FC<ProjectOverlayProps> = ({
  image,
  title,
  children,
  link,
}) => {
  return (
    <div className="">
      <div className="relative group rounded-2xl p-4 w-full lg:min-h-[600px]">
        <div className="w-full h-auto">
          <Image src={image} alt="Infrastructure Ambulance Project Image" />
        </div>

        <div
          className="
            bg-gradient-to-r 
          from-to/70
          to-from/70
            rounded-2xl
            h-full 
            w-full 
            absolute 
            bottom-0 
            opacity-0
            group-hover:opacity-100
            p-10
            flex
            flex-col
            justify-between
           
          "
        >
          <div>
            <h2 className="text-gray-100 scaleup">{title}</h2>
            <p className="text-gray-100 lg:w-2/3 scaleup">{children}</p>
          </div>
          <a href={link} target={'_blank'} rel="noreferrer">
            <div
              className="
              px-[48px]
              py-[24px]
              border-4
              border-gray-100
              rounded-full
              group
              smooth-shadow
              hover:px-[40px]
              parent
              w-fit
              mb-6
              
            "
            >
              <p className="text-gray-100 flex items-center scaleup">
                <span className="mr-16 child">Open Project</span>
                <Image
                  src={SubmitIcon}
                  width={30}
                  height={30}
                  alt="submit icon"
                />
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverlay;
