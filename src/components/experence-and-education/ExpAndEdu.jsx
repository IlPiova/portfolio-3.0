import { useState } from "react";
import "./expAndEdu.scss";

export default function ExpAndEdu() {
  const [exp, setExp] = useState(true);
  const [edu, setEdu] = useState(false);

  function toggleSection(e) {
    console.log(e.target);
    if (e.target.id === "exp") {
      setExp(true);
      setEdu(false);
    } else if (e.target.id === "edu") {
      setEdu(true);
      setExp(false);
    }
  }
  return (
    <>
      <div className="section-container">
        <div className="section-selector" onClick={toggleSection} id="exp">
          Experience
        </div>
        <div className="section-selector" onClick={toggleSection} id="edu">
          Education
        </div>

        <div className="section">
          {/* Visualizzazione sezione esperienza */}
          {exp && <div className="exp-container">EXPPPPP</div>}

          {/* Visualizzazione sezione educazione */}
          {edu && <div className="exp-container">EDUUUUUUU</div>}
        </div>
      </div>
    </>
  );
}
