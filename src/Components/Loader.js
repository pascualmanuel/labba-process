// Loader.js
import React, { useState, useEffect } from "react";
import "../Styles/Prueba.css";

const Loader = () => {
  const [loading, setLoading] = useState(true);
  const [loader, setLoader] = useState("loader");

  useEffect(() => {
    const fakeLoading = setTimeout(() => {
      setLoading(false);
      setLoader("jaja");
    }, 4000); // Adjust the duration as needed

    return () => clearTimeout(fakeLoading);
  }, []);

  return (
    <div className={`${loader} ${loading ? "loading" : ""}`}>
      {/* Your loader content goes here */}
      Loading...
    </div>
  );
};

export default Loader;
