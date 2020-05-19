import React from "react";
import githubLogo from "../assets/github-logo.svg";
import gmailLogo from "../assets/gmail-logo.svg";
import linkedinLogo from "../assets/linkedin-logo.svg";
// import turingLogo from "../assets/turing-logo.png";

export const Footer = () => {
  return (
    <footer class="page-footer">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text"></h5>
            <p class="grey-text text-lighten-4">
              You can use rows and columns here to organize your footer content.
            </p>
          </div>
          <div class="col l4 offset-l2 s12">
            <h5 class="white-text">Links</h5>
            <a class="waves-effect waves-light btn-large social github">
              <img src={githubLogo} className="logo" alt="github logo" /> Find
              me on github
            </a>
            <a class="waves-effect waves-light btn-large social google">
              <img src={gmailLogo} className="logo" alt="gmail logo" /> Get in
              touch!
            </a>
            <a class="waves-effect waves-light btn-large social linkedin">
              <img src={linkedinLogo} className="logo" alt="linkedin logo" />{" "}
              Connect to me on linkedin
            </a>
            {/* <a class="waves-effect waves-light btn-large social linkedin">
              <img src={turingLogo} className="logo" alt="turing logo" /> See my
              Portfolio on Turing Alumms
            </a> */}
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">© 2020 Erik Raith</div>
      </div>
    </footer>
  );
};

export default Footer;
