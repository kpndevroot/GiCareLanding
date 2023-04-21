import Image from "next/image";
import Link from "next/link";
import mock from "../public/images/devicess.png";
import { IoLogoGithub, IoLogoGooglePlaystore } from "react-icons/io5";
import { HiOutlineDownload } from "react-icons/hi";
import { MdFileDownloadDone } from "react-icons/md";
import { useState } from "react";
import { motion } from "framer-motion";
export default function Main() {
  const [isDownload, setIsDownload] = useState(false);
  return (
    <section className="text-gray-600 body-font">
      <div className="max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col-reverse items-center">
        <div className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-40 items-center text-center">
          <h1 className="mb-5 sm:text-6xl max-sm:text-4xl text-5xl items-center Avenir xl:w-2/2 text-gray-900">
            Expert care, just a Click away: Your health, our priority
          </h1>
          <p className="mb-4 xl:w-3/4 text-gray-600 text-lg ">
            "Stomach troubles? We've got you covered: Gastrology with
            compassion."
          </p>
          <div className="flex justify-center gap-2 max-sm:flex-col">
            <Link
              className="inline-flex items-center px-5 py-3 mt-2 font-medium text-white transition duration-500 ease-in-out transform bg-blue-primary border rounded-lg"
              target="_blank"
              href="https://github.com/AyushIyankan/HospitalApp/releases/tag/v1.3"
            >
              <span className="justify-center">Find out more</span>
            </Link>
            <Link
              onClick={() => setIsDownload(true)}
              className="inline-flex gap-2 items-center px-5 py-3 mt-2 font-medium text-white transition duration-500 ease-in-out transform bg-blue-primary border rounded-lg"
              href="https://www.dropbox.com/s/nmgt6wbtfqj18co/app-release.apk?dl=1"
            >
              <span className="justify-center">Download</span>
              {isDownload ? (
                <MdFileDownloadDone className="" />
              ) : (
                <HiOutlineDownload className="" />
              )}
            </Link>
          </div>
          <div className="flex flex-row max-sm:justify-center max-md:justify-start w-full gap-3 mb-4 my-4 text-left ">
            <Link href="/">
              <IoLogoGooglePlaystore size={40} />
            </Link>
            <Link
              href="https://github.com/AyushIyankan/HospitalApp/releases"
              target="_blank"
            >
              <IoLogoGithub size={40} />
            </Link>
          </div>
        </div>
        <div className="xl:mr-44 sm:mr-0 sm:mb-28 mb-0 lg:mb-0 mr-48 md:pl-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <Image
              className="w-80 md:ml-1 ml-24 max-sm:w-90"
              alt="iPhone-12"
              // src="/images/iPhone-12-Pro.png"
              src={mock}
            ></Image>
          </motion.div>
        </div>
      </div>

      {/* <section className="mx-auto">
        <div className="container px-5 mx-auto lg:px-24 ">
          <div className="flex flex-col w-full mb-4 text-left lg:text-center">
            <h1 className="mb-8 text-2xl Avenir font-semibold text-black">
              Trusted by top-tier product companies
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-16 mb-16 text-center lg:grid-cols-4">
            <div className="flex items-center justify-center">
              <img
                src="/images/Google-Logo.webp"
                alt="Google Logo"
                className="block object-contain h-16 greyC"
              ></img>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/images/Shopify-Logo.svg"
                alt="Shopify Logo"
                className="block object-contain h-16 greyC"
              ></img>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/images/Cloudflare-Logo.svg"
                alt="Cloudflare Logo"
                className="block object-contain h-16 greyC"
              ></img>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/images/PayPal-Logo.png"
                alt="Paypal Logo"
                className="block object-contain h-16 greyC"
              ></img>
            </div>
          </div>
        </div>
      </section>
      <div className="grr max-w-7xl pt-20 mx-auto text-center">
        <h1 className="mb-8 text-6xl Avenir font-semibold text-gray-900">
          Less code, less effort.
        </h1>
        <h1 className="mb-8 text-2xl Avenir font-semibold text-gray-600 text-center">
          Minify your CSS with Tailwind's built in PostCSS support.
        </h1>
        <div className="container flex flex-col items-center justify-center mx-auto rounded-lg ">
          <img
            className="object-cover object-center w-3/4 mb-10 g327 border rounded-lg shadow-md"
            alt="Placeholder Image"
            src="./images/placeholder.png"
          ></img>
        </div>
      </div>
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="py-24 md:py-36">
            <h1 className="mb-5 text-6xl Avenir font-semibold text-gray-900">
              Subscribe to our newsletter
            </h1>
            <h1 className="mb-9 text-2xl font-semibold text-gray-600">
              Enter your email address and get our newsletters straight away.
            </h1>
            <input
              placeholder="jack@example.com"
              name="email"
              type="email"
              autoComplete="email"
              className="border border-gray-600 w-1/4 pr-2 pl-2 py-3 mt-2 rounded-md text-gray-800 font-semibold hover:border-gray-900"
            ></input>{" "}
            <a
              className="inline-flex items-center px-14 py-3 mt-2 ml-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-gray-900"
              href="/"
            >
              <span className="justify-center">Subscribe</span>
            </a>
          </div>
        </div>
      </section> */}
    </section>
  );
}
