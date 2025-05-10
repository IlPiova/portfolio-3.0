import "./social.scss";
import linkedInLogo from "../../assets/icons/social icons/linkedin-white.png";
import start2ImpactLogo from "../../assets/icons/social icons/space-shuttle-white.png";
import githubLogo from "../../assets/icons/social icons/github-white.png";

export default function Social() {
  return (
    <>
      <div className="general-social-container">
        <div className="social-container">
          <a
            href="https://www.linkedin.com/in/cristianpiovani/"
            target="_blank"
            className="social-link"
          >
            <img src={linkedInLogo} alt="LinkedIn logo" className="social" />
          </a>
        </div>

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
        <div className="social-container">
          <a
            href="https://github.com/ilpiova"
            target="_blank"
            className="social-link"
          >
            <img src={githubLogo} alt="github logo" className="social" />
          </a>
        </div>
      </div>
    </>
  );
}
