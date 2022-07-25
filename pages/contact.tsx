import { Form, Formik } from 'formik';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { createRef, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Button from '../components/Button';
import InputField from '../components/InputField';
import DownArrow from '../public/down-arrow.svg';
import Logo from '../public/favicon.svg';
import GitHubLogo from '../public/github-logo.svg';
import SubmitIcon from '../public/submit-icon.svg';

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
          // hire me
        }
        <div className="lg:flex items-center mb-128">
          <div className="lg:w-1/2 lg:my-128 my-96 pr-8">
            <h4 className="mb-32">
              I&apos;m currently available for feelance work.
            </h4>
            <p className="mb-32">
              If you&apos;re looking for a enthusiast full stack develoer to
              help you build or upgrade your projects, let&apos;s talk.
            </p>
            <div className="flex mb-64 lg:w-full ">
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
            <ScrollLink
              to="project-contact-form"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
              className="w-full lg:w-fit"
            >
              <Button>
                <span className="mr-16 group-hover:mr-32">
                  Have a Project in Mind?
                </span>
                <Image
                  src={DownArrow}
                  width={30}
                  height={30}
                  alt="down arrow"
                />
              </Button>
            </ScrollLink>
          </div>
          <div className="lg:w-1/2 ">
            <Formik
              initialValues={{
                usernameOrNumber: '',
                password: '',
              }}
              onSubmit={async (values, { setErrors }) => {
                if (!values.usernameOrNumber) {
                  setErrors({
                    usernameOrNumber:
                      'Please enter your username of phone number',
                  });
                } else if (!values.password) {
                  setErrors({
                    password: 'Please Enter your password',
                  });
                } else {
                }
              }}
            >
              {({ values, handleChange, isSubmitting }) => {
                return (
                  <Form autoComplete="off">
                    <div>
                      <div className="mt-10 w-full">
                        <InputField
                          name="name"
                          key="name"
                          label="Your Name"
                          placeholder="Enter your Name"
                        />
                        <InputField
                          name="email"
                          type="email"
                          key="email"
                          label="Your Email Address"
                          placeholder="example@email.com"
                        />
                        <InputField
                          name="message"
                          textarea
                          key="message"
                          label="Message"
                          placeholder="Enter the message"
                        />
                      </div>
                    </div>
                    <button type="submit" className="w-full">
                      <Button>
                        <span className="mr-16 group-hover:mr-32">
                          Send Message
                        </span>
                        <Image
                          src={SubmitIcon}
                          width={30}
                          height={30}
                          alt="submit icon"
                        />
                      </Button>
                    </button>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
        <div className="lg:flex items-center mb-128" id="project-contact-form">
          <div className="lg:w-1/2 lg:my-128 my-96 pr-8">
            <h4 className="mb-32">Got a project in mind?</h4>
            <p className="mb-32">
              Use the form to give me as much detail as possible and I&apos;ll
              get back to you as soon as I can. <br />
              <br /> Alternatively, get in touch using the information below or
              contact men via social media.
            </p>
            <div className="flex mb-64 lg:w-full ">
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
          </div>
          <div className="lg:w-1/2 ">
            <Formik
              initialValues={{
                usernameOrNumber: '',
                password: '',
              }}
              onSubmit={async (values, { setErrors }) => {
                if (!values.usernameOrNumber) {
                  setErrors({
                    usernameOrNumber:
                      'Please enter your username of phone number',
                  });
                } else if (!values.password) {
                  setErrors({
                    password: 'Please Enter your password',
                  });
                } else {
                }
              }}
            >
              {({ values, handleChange, isSubmitting }) => {
                return (
                  <Form autoComplete="off">
                    <div>
                      <div className="mt-10 w-full">
                        <InputField
                          name="name"
                          key="name"
                          label="Your Name"
                          placeholder="Enter your Name"
                        />
                        <InputField
                          name="email"
                          type="email"
                          key="email"
                          label="Your Email Address"
                          placeholder="example@email.com"
                        />
                        <InputField
                          name="projectDetails"
                          textarea
                          key="projectDetails"
                          label="Project Details"
                          placeholder="Enter the project details"
                        />
                        <div className="lg:flex w-full">
                          <div className="mr-32 w-full">
                            <InputField
                              name="budget"
                              key="budget"
                              label="Your Estimated Budget"
                              placeholder="Enter the estimated budget"
                            />
                          </div>
                          <InputField
                            name="timeline"
                            key="timeline"
                            label="Your Timeline"
                            placeholder="Enter the timeline"
                          />
                        </div>
                      </div>
                    </div>
                    <button className="w-full">
                      <Button>
                        <span className="mr-16 group-hover:mr-32">
                          Let&apos;s Do This
                        </span>
                        <Image
                          src={SubmitIcon}
                          width={30}
                          height={30}
                          alt="submit icon"
                        />
                      </Button>
                    </button>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </main>

      <footer className="bg-blank">
        <div className="flex flex-col-reverse items-center md:flex-row md:justify-between py-5">
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
    </div>
  );
};

export default Home;
