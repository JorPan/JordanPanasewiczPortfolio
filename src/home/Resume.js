import React from "react";
// import DownloadLink from "react-download-link";
import DownloadLink from "./DownloadLink.js";
import { Document } from "react-pdf";

export default function Resume() {
  return (
    <div className="resume-page">
      <div className="resume-download">
        <DownloadLink src="https://pdfhost.io/v/pkhcQfd3F_Jordan_Panasewicz_Full_Stack_Engineer_Resumepdf.pdf">
          Click Here to View or Download PDF
        </DownloadLink>
      </div>

      <img
        className="resume"
        src="https://i.imgur.com/z60fOyf.jpeg"
        alt="JordanPanasewiczFullStackResume"
      />
    </div>
  );
}
