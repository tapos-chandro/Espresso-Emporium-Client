import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-footer-bg pt-28 ">
      <div className="container max-w-6xl mx-auto px-5 lg:flex">
        <div className="lg:w-1/2 ">
          <img
            src="../../../src/assets/images/more/logo1.png"
            className="w-20"
            alt=""
          />
          <h3 className="text-5xl text-[#331A15] my-6">Espresso Emporium</h3>
          <p className="text-[#1B1A1A] font-raleway text-xl">
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>
          <div className="flex gap-6 my-8">
            <Link to={""}>
              <FaFacebook className="text-4xl text-[#331A15]"></FaFacebook>
            </Link>
            <Link to={""}>
              <FaTwitter className="text-4xl text-[#331A15]"></FaTwitter>
            </Link>
            <Link to={""}>
              <FaInstagram className="text-4xl text-[#331A15]"></FaInstagram>
            </Link>
            <Link to={""}>
              <FaLinkedin className="text-4xl text-[#331A15]" />
            </Link>
          </div>
          <h1 className="text-5xl text-[#331A15]">Get in Touch</h1>
          <div className="mt-8">
            <span className="flex items-center text-xl my-4 font-raleway">
              <FaPhoneAlt className="mr-4 text-2xl" />
              +88 01533 333 333
            </span>
            <span className="flex items-center text-xl my-4 font-raleway">
              <MdEmail className="mr-4  text-2xl" />
              info@gmail.com
            </span>
            <span className="flex items-center text-xl my-4 font-raleway">
              <FaLocationDot className="mr-4 text-2xl" />
              72, Wall street, King Road, Dhaka
            </span>
          </div>
        </div>
        <div className="lg:w-1/2 lg:pl-28">
          <h1 className="text-[#331A15] text-5xl">Connect with Us</h1>
          <div className="mt-8">
            <input
              className="input input-bordered join-item w-full outline-0 border-0 "
              placeholder="Name"
            />
          </div>
          <div className="mt-8">
            <input
              className="input input-bordered join-item w-full outline-0 border-0 "
              placeholder="Email"
            />
          </div>
          <div className="mt-8">
            <textarea
              className="textarea textarea-bordered w-full  border-0 outline-0"
              placeholder="Message"
            ></textarea>
          </div>
          <input
            className="text-[#331A15] py-2 px-8 border-2 border-[#331A15] rounded-full btn mt-8 "
            type="submit"
            value="Send Message "
          />
        </div>
      </div>
      <div
        className={`text-center  bg-[url('https://i.ibb.co.com/840VdBL1/28.jpg')]  mt-12 `}
      >
        <div className="bg-[#161616b5] h-full py-4 px-5">
          <p className="text-white text-xl">
            Copyright Espresso Emporium ! All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
