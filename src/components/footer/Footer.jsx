import Social from "../social/Social";
import "./footer.scss";

export default function Footer() {
  return (
    <>
      <div className="footer-container">
        <h2 className="subtitle" style={{ marginBottom: "2em" }}>
          Cristian <br></br> Piovani
        </h2>
        <Social />
      </div>
    </>
  );
}
