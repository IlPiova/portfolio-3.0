import "./skills.scss";
import htmlLogo from "../../assets/icons/skills/html5-logo.webp";
import cssLogo from "../../assets/icons/skills/css3-logo.webp";
import sassLogo from "../../assets/icons/skills/sass-logo.webp";
import javascriptLogo from "../../assets/icons/skills/javascript-logo.webp";
import typesctiptLogo from "../../assets/icons/skills/typescript-logo.webp";
import reactLogo from "../../assets/icons/skills/react-logo.webp";
import gitLogo from "../../assets/icons/skills/git-logo.webp";
import githubLogo from "../../assets/icons/social icons/github-white.webp";

export default function Skills() {
  return (
    <>
      <h2 className="subtitle" id="skills">
        Skills:
      </h2>
      <div className="skills-container">
        <div className="skill">
          <img src={htmlLogo} alt="logo-html" className="skill-logo" />
          <p className="skill-name">HTML</p>
        </div>

        <div className="skill">
          <img src={cssLogo} alt="logo-css" className="skill-logo" />
          <p className="skill-name">CSS</p>
        </div>

        <div className="skill">
          <img src={sassLogo} alt="logo-sass" className="skill-logo" />
          <p className="skill-name">SASS</p>
        </div>

        <div className="skill">
          <img
            src={javascriptLogo}
            alt="logo-javascript"
            className="skill-logo"
          />
          <p className="skill-name">JAVASCRIPT</p>
        </div>

        <div className="skill">
          <img
            src={typesctiptLogo}
            alt="logo-typescript"
            className="skill-logo"
          />
          <p className="skill-name">TYPESCRIPT</p>
        </div>

        <div className="skill">
          <img src={reactLogo} alt="logo-react" className="skill-logo" />
          <p className="skill-name">REACT</p>
        </div>

        <div className="skill">
          <img src={gitLogo} alt="logo-git" className="skill-logo" />
          <p className="skill-name">GIT</p>
        </div>

        <div className="skill">
          <img src={githubLogo} alt="logo-github" className="skill-logo" />
          <p className="skill-name">GITHUB</p>
        </div>
      </div>
    </>
  );
}
