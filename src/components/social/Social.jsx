import "./social.scss";
import linkedInLogo from "../../assets/icons/social icons/linkedin-white.webp";
import start2ImpactLogo from "../../assets/icons/social icons/space-shuttle-white.webp";
import githubLogo from "../../assets/icons/social icons/github-white.webp";
import cvLogo from "../../assets/icons/social icons/cv-logo.webp";
import Tooltip from "../tooltip/TooltipComonent";

export default function Social() {
  return (
    <>
      <div className="general-social-container">
        <Tooltip text={"Profilo LinkedIn"}>
          <div className="social-container">
            <a
              href="https://www.linkedin.com/in/cristianpiovani/"
              target="_blank"
              className="social-link"
            >
              <img src={linkedInLogo} alt="LinkedIn logo" className="social" />
            </a>
          </div>
        </Tooltip>

        <Tooltip text={"Progressi Start2Impact"}>
          <div className="social-container">
            <a
              href="https://talent.start2impact.it/profile/cristian-piovani"
              target="_blank"
              className="social-link"
            >
              <img
                src={start2ImpactLogo}
                alt="Start2Impact logo"
                className="social"
              />
            </a>
          </div>
        </Tooltip>

        <Tooltip text={"Profilo GitHub"}>
          <div className="social-container">
            <a
              href="https://github.com/ilpiova"
              target="_blank"
              className="social-link"
            >
              <img src={githubLogo} alt="github logo" className="social" />
            </a>
          </div>
        </Tooltip>
        <Tooltip text={"Scarica il CV"}>
          <div className="social-container">
            <a
              href="../../assets/documents/CV Piovani Cristian - Front-End Developer.pdf"
              target="_blank"
              className="social-link"
            >
              <img src={cvLogo} alt="Curriculum logo" className="social" />
            </a>
          </div>
        </Tooltip>
      </div>
    </>
  );
}
