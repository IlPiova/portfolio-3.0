import "./about.scss";
import aboutPhoto from "../../assets/imgs/about-photo.webp";

export default function About() {
  return (
    <div className="about-container" id="about">
      <div className="about-info-container">
        <div className="profile-image-container">
          <img src={aboutPhoto} alt="about-photo" className="profile-pic" />
        </div>
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
        Ho da poco finito il Master in Front-End development con Start2Impact,
        creando progetti in HTML, CSS, JS, React e TypeScript. Creo interfacce
        pulite, performanti e accessibili con occhio al dettaglio. Cerco
        un'opportunità per applicare le mie skill e crescere su progetti
        stimolanti.
      </p>
    </div>
  );
}
