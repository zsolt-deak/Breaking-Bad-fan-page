import icon from "../assets/icon.png";
import img from "../assets/img.jpg";
import { Divider } from "antd";

function About() {
  return (
    <div>

      <div className="about-info">
        <div className="container">
          <img alt="" src={icon}></img>
          <img alt="" src={img}></img>
        </div>
        <div className="info-text">
          <p>
            A high school chemistry teacher diagnosed with inoperable lung cancer
            turns to manufacturing and selling methamphetamine in order to secure
            his family's future.
          </p>
          <Divider />
          <p>
            Creator{" "}
            <span>
              <a href="#">Vince Gilligan</a>
            </span>
          </p>
          <Divider></Divider>
          <p>
            Stars <span><a href="#">Bryan Cranston</a> &#9679;
              <a href="#" >Aaron Paul</a> &#9679;<a href="#">Anna Gunn</a></span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default About;
