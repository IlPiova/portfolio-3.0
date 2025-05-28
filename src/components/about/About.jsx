import "./about.scss";
import aboutPhoto from "../../assets/imgs/about-photo.webp";
import Tooltip from "../tooltip/TooltipComonent";

export default function About() {
  return (
    <div className="about-container" id="about">
      <div className="about-info-container">
        <Tooltip text={"Hey!"}>
          <div className="profile-image-container">
            <img src={aboutPhoto} alt="about-photo" className="profile-pic" />
          </div>{" "}
        </Tooltip>

        <div className="personal-info-container">
          <h1 className="about-title">Cristian Piovani</h1>
          <p className="place-info">Quartu Sant'Elena (CA)</p>
          <a
            href="https://www.linkedin.com/in/cristianpiovani/"
            target="_blank"
            className="work-info "
          >
            Available for work
          </a>
        </div>
      </div>
      <h2 className="about-subtitle">Chi sono:</h2>
      <p className="description">
        Laureato in Scienze della Comunicazione, durante il Master di
        Start2Impact ho sviluppato progetti in HTML, CSS, JS, React e
        TypeScript. Creo interfacce pulite, performanti e accessibili con occhio
        al dettaglio. Cerco un'opportunità per applicare le mie skill e crescere
        su progetti stimolanti.
      </p>
    </div>
  );
}
