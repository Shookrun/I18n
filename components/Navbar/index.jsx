import React, { useContext, useState } from "react";
import LanguageContext from "../changeLanguage/LanguageContext";
import { findFlagUrlByNationality } from "country-flags-svg";
const Navbar = () => {
  const { changeLanguage } = useContext(LanguageContext);
  const [click, setClick] = useState(false);
  const az = findFlagUrlByNationality("Azerbaijani");
  const british = findFlagUrlByNationality("British");
  return (
    <div
      style={{
        fontFamily: "Verdana",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <h1>Logo</h1>
      <button
        style={{
          border: "1px solid",
          padding: "10px",
          borderRadius: "12px",
          background: "none",
        }}
        onClick={() => setClick(click == true ? false : true)}
      >
        Change Language
      </button>
      {click && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            transform: "translate(-50%, -50%)",
            right: -60,
            top: 110,
            background: "white",
          }}
        >
          <button
            style={{
              background: "transparent",
              border: "1px solid",
              padding: "10px",
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
            onClick={() => changeLanguage("en")}
          >
            <img src={british} style={{ width: "30px" }} alt="" />
            English
          </button>
          <button
            style={{
              background: "transparent",
              border: "1px solid",
              padding: "10px",
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
            onClick={() => changeLanguage("az")}
          >
            <img src={az} style={{ width: "30px" }} alt="" />
            Azerbaycan
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
