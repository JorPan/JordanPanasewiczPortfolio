import React from "react";
// import DownloadLink from "react-download-link";
import DownloadLink from "./DownloadLink.js";
import { Document } from "react-pdf";

export default function Resume() {
  return (
    <div className="resume-screen">
      <div className="resume-download">
        <DownloadLink src="https://pdfhost.io/v/pNaPPD2VU_Jordan_Panasewicz_Resumepdf.pdf">
          Click Here to View & Download PDF
        </DownloadLink>
      </div>

      {/* <img
        className="resume"
        src="https://i.imgur.com/BqRNFLJ.png"
        alt="JPResume"
      /> */}
    </div>
  );
}
