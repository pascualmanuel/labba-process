import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../Styles/Prueba.css";
import { ReactSVG } from "react-svg";
import Submit from "../Assets/svg-submit.svg";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
function Contact() {
  const [selectedService, setSelectedService] = useState("");

  const handleServiceClick = (service) => {
    if (selectedService.includes(service)) {
      setSelectedService(selectedService.filter((s) => s !== service));
    } else {
      setSelectedService([...selectedService, service]);
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    about: "",
    budget: "",
    selectedService: "", // New state for selected service
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleServiceChange = (selectedService) => {
    setFormData({
      ...formData,
      selectedService,
    });
    // console.log(selectedService, ";s;s");
  };

  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Combine selected services with other form data
    const dataToSend = {
      name: formData.name,
      email: formData.email,
      about: formData.about,
      budget: formData.budget,
      selectedService: selectedService.join(", "), // Convert array to comma-separated string
    };

    // Send the form data using emailjs
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        "template_hvxyvkq",
        formRef.current, // Use the form element reference
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormData({
            name: "",
            email: "",
            about: "",
            budget: "",
          });
          setSelectedService([]);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="flex flex-column justify-center">
        <div className="grain"></div>
        <div className="flex items-center">
          <div className="mr-[170px] ">
            <h2 className="b3-desk">
              We would love to be part of your project
            </h2>
            {/* <Link to="/prueba"> */}
            <h2 className="h2-desk mt-1 mb-9" style={{ fontSize: "65px" }}>
              Say hello!
            </h2>
            {/* </Link> */}
          </div>
          <div>
            <h2 className="b3-desk">I need</h2>
            <div className="contact-b-cont flex flex-row flex-wrap content-center mt-9">
              <div
                className={`contact-buttons b4-desk ${
                  selectedService.includes("UX / UI Design")
                    ? "contact-b-active"
                    : ""
                }`}
                onClick={() => handleServiceClick("UX / UI Design")}
              >
                <span style={{ userSelect: "none" }}>UX / UI Design</span>
              </div>

              <div
                className={`contact-buttons b4-desk ${
                  selectedService.includes("Web Development")
                    ? "contact-b-active"
                    : ""
                }`}
                onClick={() => handleServiceClick("Web Development")}
              >
                <span style={{ userSelect: "none" }}>Web Development</span>
              </div>

              <div
                className={`contact-buttons b4-desk ${
                  selectedService.includes("Branding") ? "contact-b-active" : ""
                }`}
                onClick={() => handleServiceClick("Branding")}
              >
                <span style={{ userSelect: "none" }}>Branding</span>
              </div>
              <div
                className={`contact-buttons b4-desk ${
                  selectedService.includes("Website from scratch")
                    ? "contact-b-active"
                    : ""
                }`}
                onClick={() => handleServiceClick("Website from scratch")}
              >
                <span style={{ userSelect: "none" }}>Website from scratch</span>
              </div>
              <div
                className={`contact-buttons b4-desk ${
                  selectedService.includes("App design")
                    ? "contact-b-active"
                    : ""
                }`}
                onClick={() => handleServiceClick("App design")}
              >
                <span style={{ userSelect: "none" }}>App design</span>
              </div>
              <div
                className={`contact-buttons b4-desk ${
                  selectedService.includes("Other") ? "contact-b-active" : ""
                }`}
                onClick={() => handleServiceClick("Other")}
              >
                <span style={{ userSelect: "none" }}>Other</span>
              </div>
            </div>
            <div className="contact-form mt-[1rem]">
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="input-group flex justify-between">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required={true}
                    placeholder="Your name"
                    style={{ width: "225px" }}
                    className="input-cursor"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required={true}
                    placeholder="Your email"
                    style={{ width: "225px" }}
                    className="input-cursor"
                  />
                </div>
                <textarea
                  type="textarea"
                  name="about"
                  value={formData.about}
                  onChange={handleChange}
                  required={true}
                  placeholder="About your project"
                  style={{ width: "500px", marginTop: "40px" }}
                  className="input-cursor"
                />
                <br />
                <input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required={true}
                  placeholder="Budget"
                  style={{ width: "500px", marginTop: "40px" }}
                  className="input-cursor"
                />
                <input
                  type="hidden"
                  name="selectedService"
                  value={selectedService}
                />
                <div className="w-[32rem] flex justify-center h-[85px]">
                  <div className="button-contact-submit b2-desk mt-14 mb-24 input-cursor">
                    Send request
                  </div>
                </div>
                {/* <button
                  type="submit"
                  className="w-[32rem] flex justify-center mt-14 mb-24 input-cursor"
                >
                  <ReactSVG src={Submit} />
                </button> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
