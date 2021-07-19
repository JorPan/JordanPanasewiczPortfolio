import React from "react";

export default function Contact() {
  return (
    <div className="contact-page">
      <div>
        <img
          className="circle-photo"
          src="https://i.imgur.com/j289lch.jpg"
          alt="jorpantech"
        />
        <div className="media-links">
          <a href="mailto:jorpantech@gmail.com">
            <img
              className="gmail-logo"
              src="https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-16.png"
              alt="gmail-logo"
            />
          </a>
          <a href="https://www.linkedin.com/in/jordan-panasewicz/">
            <img
              className="media-logo"
              src="https://www.freepnglogos.com/uploads/linkedin-blue-style-logo-png-0.png"
              alt="linkedin-logo"
            />
          </a>
          <a href="https://www.youtube.com/channel/UC7kqpbrNDD88o0yyEJ-lDGg">
            <img
              className="media-logo"
              src="https://www.freeiconspng.com/thumbs/youtube-logo-png/hd-youtube-logo-transparent-background-23.png"
              alt="youtube-logo"
            />
          </a>
          <a href="https://jorpantech.medium.com/">
            <img
              className="medium-logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Medium_logo_Monogram.svg/1200px-Medium_logo_Monogram.svg.png"
              alt="medium-logo"
            />
          </a>
        </div>
        {/* <div className="media-names">
        <p className="media-name">e-mail</p>
        <p className="media-name">profile</p>
        <p className="media-name">videos</p>
        <p className="media-name">blog</p>
      </div> */}
        <div>
          <p className="get-in-touch">Let's Get Funky!</p>
        </div>
      </div>
    </div>
  );
}
