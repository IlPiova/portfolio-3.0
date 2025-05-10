import Social from "../social/Social";
import "./footer.scss";

export default function Footer() {
  return (
    <>
      <div className="footer-container">
        <Social />
        <h2 className="subtitle">Dove Trovarmi:</h2>
        <p>09045, Quartu Sant'Elena, Cagliari</p>
        <p>Sito web Cristian Piovani</p>
      </div>
    </>
  );
}
