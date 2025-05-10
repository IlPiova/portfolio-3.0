import "./skills.scss";
import htmlLogo from "../../assets/icons/skills/html5-logo.png";
import cssLogo from "../../assets/icons/skills/css3-logo.png";
import javascriptLogo from "../../assets/icons/skills/javascript-logo.png";
import typesctiptLogo from "../../assets/icons/skills/typescript-logo.png";
import reactLogo from "../../assets/icons/skills/react-logo.png";
import gitLogo from "../../assets/icons/skills/git-logo.png";
import githubLogo from "../../assets/icons/social icons/github-white.png";

export default function Skills() {
  return (
    <>
      <h2 className="subtitle">Skills:</h2>
      <div className="skills-container">
        <div className="skill">
          <img src={htmlLogo} alt="" className="skill-logo" />
          <p className="skill-name">HTML</p>
        </div>
        <div className="skill">
          <img src={cssLogo} alt="" className="skill-logo" />
          <p className="skill-name">CSS</p>
        </div>
        <div className="skill">
          <img src={javascriptLogo} alt="" className="skill-logo" />
          <p className="skill-name">JAVASCRIPT</p>
        </div>
        <div className="skill">
          <img src={typesctiptLogo} alt="" className="skill-logo" />
          <p className="skill-name">TYPESCRIPT</p>
        </div>
        <div className="skill">
          <img src={reactLogo} alt="" className="skill-logo" />
          <p className="skill-name">REACT</p>
        </div>
        <div className="skill">
          <img src={gitLogo} alt="" className="skill-logo" />
          <p className="skill-name">GIT</p>
        </div>
        <div className="skill">
          <img src={githubLogo} alt="" className="skill-logo" />
          <p className="skill-name">GITHUB</p>
        </div>
      </div>
    </>
  );
}
