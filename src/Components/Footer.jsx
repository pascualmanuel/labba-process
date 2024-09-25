import React from "react";
import { useState, useRef } from "react";
import Facebook from "../Assets/icons/facebook.svg";
import Linkedin from "../Assets/icons/linkedin.svg";
import Instagram from "../Assets/icons/instagram.svg";
import { ReactSVG } from "react-svg";
const Footer = () => {
  const [hovered, setHovered] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  function copyToClipboard(textToCopy) {
    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    setIsCopied(true); // Set isCopied to true when the text is copied
  }

  const email = "hello@labba.studio";
  const textToCopy = useRef(null);

  const handleCopyClick = () => {
    copyToClipboard(email);
    if (textToCopy.current) {
      textToCopy.current.textContent = "Copied!";
    }
  };
  const btnEmailCopyStyle = {
    position: "relative",
    width: "220px",
    height: "42px",
    overflow: "hidden",
    border: "none",
    cursor: "inherit",
  };

  const beforeAfterStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    width: "100%",
    height: "100%",
    transition: "all 0.3s",
  };

  const beforeHover = {
    ...beforeAfterStyle,
    top: hovered ? "-60px" : "0",
  };

  const afterHover = {
    ...beforeAfterStyle,
    top: hovered ? "0" : "60px",
  };
  return (
    <>
      <div className="flex flex-col sm:flex-row pb-[50px]">
        <div className="t-mail ml-[18px] sm:ml-[40px] lg:ml-[128px] mb-[15px] sm:mb-[0px] sm:mr-[20px]">
          <p className="sayhi mb-3">Say hi</p>
          <div className="btn-floral-border" onClick={handleCopyClick}>
            <button
              className=""
              style={btnEmailCopyStyle}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => {
                setHovered(false);
                textToCopy.current.textContent = "click to copy";
              }}
            >
              <div className="b4-desk text-red" style={beforeHover}>
                hello@labba.studio
              </div>
              <div
                className="b4-desk text-red"
                style={afterHover}
                ref={textToCopy}
              >
                {isCopied ? "Copied!" : "click to copy"}
              </div>
            </button>
          </div>
        </div>

        <div className="ml-[18px] sm:ml-[0px] sm:mr-[40px] lg:mr-[128px] flex flex-col sm:flex-row">
          <div className="mr-0 sm:mr-[20px] mb-[15px] sm:mb-[0px]">
            <div>
              <p className="sayhi mb-3">Argentina</p>
              <a
                href="https://wa.me/+5491151632960"
                className="whatsapp-link"
                target="_blank"
              >
                <div className="btn-floral-border">
                  <div className="btn-floral-scent b4-desk  before:content-['+54_9_11_5163_2960'] after:content-['Open_in_WhatsApp'] "></div>
                </div>
              </a>
            </div>
          </div>
          <div>
            <p className="sayhi mb-3">Spain</p>
            <a
              href="https://wa.me/+34634269453"
              className="whatsapp-link"
              target="_blank"
            >
              <div className="btn-floral-border">
                <div className="btn-floral-scent  b4-desk before:content-['+34_0634_0269_453'] after:content-['Open_in_WhatsApp'] "></div>
              </div>
            </a>
          </div>
        </div>
        <div className="flex items-center mt-8">
          <ReactSVG src={Facebook} className="mr-[20px]" />
          <ReactSVG src={Linkedin} className="mr-[20px]" />
          <ReactSVG src={Instagram} className="" />
        </div>
      </div>
      <div className="border-t-gray  ">
        <p className="mt-10 font-light text-base leading-6">
          © 2024 LABBA STUDIO
        </p>
      </div>
    </>
  );
};

export default Footer;
