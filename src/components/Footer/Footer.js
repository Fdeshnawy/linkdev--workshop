import logo from "../../assests/Logo.png";
import fb from "../../assests/Social.png";
import innsta from "../../assests/Social-1.png";
import tweet from "../../assests/Social-2.png";
import google from "../../assests/Google-Play.png";
import app from "../../assests/Play-Store.png";

import "./Footer.css";
function Footer() {
  return (
    <section className="m-5 d-flex justify-content-between align-tems-center">
      <div className="d-flex flex-column align-items-center" style={{width:'30%'}}>
        <img width={100} src={logo} alt="logo" />
        <p className="foot-p mt-4" >
          We make technology produce productive, adaptable and sustainable
          business experiences.
        </p>
      </div>
      <div className="tables">
        <table>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
          </tr>
        </table>
      </div>
      <div className="d-flex flex-column">
        <div>
          <img width={90} src={fb} alt="fb" />
          <img width={90} src={innsta} alt="fb" />
          <img width={90} src={tweet} alt="fb" />
        </div>
        <p className="">Discover our app</p>
        <div>
          <img width={80} src={google} alt="dload" />
          <img width={80}  src={app} alt="dload" />
        </div>
      </div>
    </section>
  );
}

export default Footer;
