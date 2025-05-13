import Social from "../social/Social";
import "./footer.scss";

export default function Footer() {
  return (
    <>
      <div className="footer-container">
        <h2 className="subtitle">
          Cristian <br></br> Piovani
        </h2>
        <Social />
        {/* <div className="footer-link">
<a href="" className="footer-item">Leggi il mio cv</a>
<a href="" className="footer-item">Profilo Github</a>
<a href="" className="footer-item">Il mio LinkedIn</a>   
   </div> */}
      </div>
    </>
  );
}
