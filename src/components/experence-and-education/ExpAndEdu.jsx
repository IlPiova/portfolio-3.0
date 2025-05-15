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
      <h2 className="subtitle">Experience</h2>
      <div className="section-container">
        <div className="selectors-container">
          <div
            className={`section-selector ${exp ? "active" : ""}`}
            onClick={toggleSection}
            id="exp"
          >
            Experience
          </div>
          <div
            className={`section-selector ${edu ? "active" : ""}`}
            onClick={toggleSection}
            id="edu"
          >
            Education
          </div>
        </div>
        <div className="section">
          {/* Visualizzazione sezione esperienza */}
          {exp && (
            <div className="exp-container">
              <h3 className="exp-title">404 </h3>
              <p className="exp-description">
                Non è stata trovata alcune esperienza in ambito informatico
              </p>
              <p className="exp-redirect">
                Per altre informazioni{" "}
                <a
                  href="../../assets/documents/CV Piovani Cristian - Front-End Developer.pdf"
                  target="_blank"
                  className="cv-link"
                >
                  scarica il CV
                </a>{" "}
              </p>
            </div>
          )}

          {/* Visualizzazione sezione educazione */}
          {edu && (
            <div className="exp-container">
              <h3 className="exp-title">Education</h3>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <p className="edu-type">Master Front-End Developer</p>
                    <p className="edu-years">Start2Impact | 2024 - 2025</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <p className="edu-type">
                      Laurea Scienze della comunicazione
                    </p>
                    <p className="edu-years">
                      Università degli studi di Cagliari | 2020 - 2023
                    </p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <p className="edu-type">Diploma perito Informatico</p>
                    <p className="edu-years">I.T.I.S. D. Scano | 2014 - 2020</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>{" "}
    </>
  );
}
