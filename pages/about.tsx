import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/favicon.svg';
import TwitterLogo from '../public/twitter-icon.svg';
import InstagramLogo from '../public/instagram-icon.svg';
import GitHubLogo from '../public/github-logo.svg';
import Button from '../components/Button';
import DownArrow from '../public/down-arrow.svg';
import ReactJSIcon from '../public/tech-stack-icons/ReactJs.svg';
import RedisIcon from '../public/tech-stack-icons/Redis.svg';
import ApolloIcon from '../public/tech-stack-icons/Apollo.svg';
import TypeOrmIcon from '../public/tech-stack-icons/typeorm logo.png';
import GraphQLIcon from '../public/tech-stack-icons/GraphQL.svg';
import PostgresSQLIcon from '../public/tech-stack-icons/PostgresSQL.svg';
import NextJSIcon from '../public/tech-stack-icons/NextJs.svg';
import NodeJSIcon from '../public/tech-stack-icons/NodeJs.svg';
import TypescriptIcon from '../public/tech-stack-icons/Typescript.svg';
import SubmitIcon from '../public/submit-icon.svg';
import InfrastructureAmbulanceImage from '../public/project-images/infra1.png';
import KecThoughtsImage from '../public/project-images/kec-thoughts.png';
import MultiplayerTicTacToeImage from '../public/project-images/tic-tac-toe.png';
import SecondaryButton from '../components/SecondaryButton';
import ProjectOverlay from '../components/ProjectOverlay';
import ProjectPhone from '../components/ProjectPhone';
import { createRef, JSXElementConstructor, useRef, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  const myRef = createRef<HTMLDivElement>();
  const copiedRef = createRef<HTMLDivElement>();
  const [menu, setMenu] = useState<null>(null);
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // @ts-ignore
    copiedRef.current.classList.remove('hidden');
    // @ts-ignore
    copiedRef.current.classList.add('animate-pulse');
    setTimeout(() => {
      // @ts-ignore
      copiedRef.current.classList.add('hidden');
    }, 500);
  };
  return (
    <div
      className=""
      onClick={(e) => {
        //@ts-ignore
        if (!e.target.classList.contains('ham')) {
          setMenu(null);
        }
      }}
    >
      <Head>
        <title>Subigya Lamichhane</title>
        <meta name="description" content="Subigya Lamichhane portfolio" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className="">
        <div
          className="bg-gray-700
           text-gray-100 
           py-2 px-10 
           rounded-xl 
           scale-75 
           fixed w-[150px] 
           left-[50%] 
           translate-x-[-75px] 
           z-50
           hidden
           "
          ref={copiedRef}
        >
          Copied!
        </div>
        {
          // header
        }
        <div className="lg:hidden">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="pr-64">
                <Link href="/">
                  <Image src={Logo} width={50} height={50} alt="logo" />
                </Link>
              </div>
            </div>
            <div className="" id="ham">
              <div
                className="space-y-2 group ham"
                onClick={() => {
                  if (menu === null) {
                    setMenu(
                      //@ts-ignore
                      <div className="flex flex-col items-center w-full animate-pulse">
                        <Link href="/about">
                          <div className="w-full border-y-2 border-gray-700 py-3">
                            <p className="text-center">About Me</p>
                          </div>
                        </Link>
                        <Link href="/about">
                          <div className="w-full border-b-2 border-gray-700 py-3">
                            <p className="text-center">Contact Me</p>
                          </div>
                        </Link>
                        <a
                          href="https://github.com/SubigyaLamichhane"
                          className="block w-full"
                          target={'_blank'}
                          rel="noreferrer"
                        >
                          <div className="w-full border-b-2 border-gray-700 py-3">
                            <p className="text-center">GitHub</p>
                          </div>
                        </a>
                      </div>
                    );
                  } else {
                    setMenu(null);
                  }
                }}
              >
                <div className="w-10 h-0.5 bg-gray-700 ham"></div>
                <div className="w-10 h-0.5 bg-gray-700 ham"></div>
                <div className="w-10 h-0.5 bg-gray-700 ham"></div>
              </div>
            </div>
          </div>

          <div>{menu}</div>
        </div>
        <div className="hidden lg:block">
          <div className="flex justify-between">
            <div className="flex items-center">
              <div className="pr-64">
                <Link href="/">
                  <Image src={Logo} width={70} height={70} alt="logo" />
                </Link>
              </div>
              <div className="pr-64 text-sm text-black">
                <Link href="/about">About Me</Link>
              </div>
              <div className="pr-64 text-sm text-black">
                <Link href="/about">Contact Me</Link>
              </div>
            </div>
            <div className="flex">
              <div className=" mr-32 flex items-center">
                <p
                  className="pr-32 text-sm gradient-text hover:cursor-pointer"
                  onClick={() => copyToClipboard('subigyalamichhane@gmail.com')}
                >
                  subigyalamichhane@gmail.com
                </p>
                <p
                  className="pr-32 text-sm text-black hover:cursor-pointer"
                  onClick={() => copyToClipboard('+9779840138330')}
                >
                  +9779840138330
                </p>
                <div className="border-r border-black h-6"></div>
              </div>
              <div className="flex items-center">
                {/* <div className="pr-32">
                <a
                  href="https://twitter.com/subigyalamichhane"
                  target={'_blank'}
                  rel="noreferrer"
                >
                  <Image
                    src={TwitterLogo}
                    width={30}
                    height={30}
                    alt="twitter"
                  />
                </a>
              </div>
              <div className="pr-32">
                <a
                  href="https://www.instagram.com/subigya_lamichhane"
                  target={'_blank'}
                  rel="noreferrer"
                >
                  <Image
                    src={InstagramLogo}
                    width={30}
                    height={30}
                    alt="instagram"
                  />
                </a>
              </div> */}
                <div>
                  <a
                    href="https://www.github.com/subigyalamichhane"
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    <Image
                      src={GitHubLogo}
                      width={23}
                      height={23}
                      alt="github"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {
          // hero
        }
        <div className="flex flex-col items-center mt-96 lg:mt-64 mb-96">
          <h3 className="text-center">Hey there, I&apos;m Subigya</h3>
          <h1 className="text-center my-32">
            Full Stack <span className="hidden md:inline">Software</span>{' '}
            Engineer
          </h1>
          <p className="text-center max-w-2xl mb-32">
            I can help you build your own SaaS or upgrade an existing one using
            modern technologies and framework that are scalable and future
            proof.
          </p>
          <ScrollLink
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="w-full lg:w-fit"
          >
            <Button>
              <span className="mr-16 group-hover:mr-32">See my Projects</span>
              <Image src={DownArrow} width={30} height={30} alt="down arrow" />
            </Button>
          </ScrollLink>

          {/* <Button
            onClick={() => {
              if (myRef) {
                // @ts-ignore
                myRef.current?.scrollIntoView();
              }
            }}
          >
            <span className="mr-16 group-hover:mr-32">See my Projects</span>
            <Image src={DownArrow} width={30} height={30} alt="down arrow" />
          </Button> */}
        </div>
        {
          // tech stack
        }
        <div className="lg:py-96 bg-blank lg:mb-256 py-64 mb-96">
          <h3 className="text-center pb-64">Favourite Tech Stack</h3>
          <div
            className="
              pb-10 
              max-w-[1024px] 
              overflow-x-scroll 
              flex 
              scrollbar 
              scrollbar-thumb-gray-900 
              scrollbar-track-gray-100  
              lg:mx-128  
              items-center
            "
          >
            <div className="lg:pr-128 pr-32">
              <Image
                layout="fixed"
                src={NextJSIcon}
                width={100}
                height={100}
                alt="nextjs"
              />
            </div>
            <div className="lg:pr-128 pr-32 ">
              <Image
                layout="fixed"
                src={NodeJSIcon}
                width={100}
                height={100}
                alt="nodejs"
              />
            </div>
            <div className="lg:pr-128 pr-32 ">
              <Image
                layout="fixed"
                src={TypescriptIcon}
                width={100}
                height={100}
                alt="typescript"
              />
            </div>
            <div className="lg:pr-128 pr-32 ">
              <Image
                layout="fixed"
                src={PostgresSQLIcon}
                width={100}
                height={100}
                alt="postgresql"
              />
            </div>
            <div className="lg:pr-128 pr-32 ">
              <Image
                layout="fixed"
                src={GraphQLIcon}
                width={100}
                height={100}
                alt="graphql"
              />
            </div>
            <div className="lg:pr-128 pr-32">
              <Image
                layout="fixed"
                src={RedisIcon}
                width={100}
                height={100}
                alt="redis"
              />
            </div>
            <div className="lg:pr-128 pr-32 ">
              <Image
                layout="fixed"
                src={ReactJSIcon}
                width={100}
                height={100}
                alt="reactjs"
              />
            </div>
            <div className="lg:pr-128 pr-32 ">
              <Image
                layout="fixed"
                src={ApolloIcon}
                width={100}
                height={100}
                alt="apollo"
              />
            </div>
            <div className=" ">
              <Image
                layout="fixed"
                src={TypeOrmIcon}
                width={100}
                height={100}
                alt="typeorm"
              />
            </div>
          </div>
        </div>
        {
          // projects
        }

        {
          // hire me
        }
        <div className="lg:w-1/2 lg:my-256 my-96">
          <h4 className="mb-32">
            I&apos;m currently available for feelance work.
          </h4>
          <p className="mb-32">
            If you&apos;re looking for a enthusiast full stack develoer to help
            you build or upgrade your projects, let&apos;s talk.
          </p>
          <div className="flex mb-64">
            <p
              className="pr-32 text-sm gradient-text hover:cursor-pointer"
              onClick={() => copyToClipboard('subigyalamichhane@gmail.com')}
            >
              subigyalamichhane@gmail.com
            </p>
            <p
              className="pr-32 text-sm text-black hover:cursor-pointer"
              onClick={() => copyToClipboard('+9779840138330')}
            >
              +9779840138330
            </p>
          </div>
          <Link href="/contact">
            <Button>
              <span className="mr-16 group-hover:mr-32">Hire Me</span>
              <Image
                src={SubmitIcon}
                width={30}
                height={30}
                alt="submit icon"
              />
            </Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
