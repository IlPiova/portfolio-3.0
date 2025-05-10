import "./about.scss";

export default function About() {
  return (
    <div className="about-container">
      <div className="profile-image-container">
        <img src="" alt="" className="profile-pic" />
      </div>
      <div className="about-info-container">
        <h1 className="title">Cristian Piovani</h1>
        <p className="place-info">Quartu Sant'Elena (CA)</p>
        <a href="" className="work-info first-work">
          Available for work
        </a>
        {/* <a href="" className="work-info second-work">
          Sentiamoci
        </a> */}
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
