import { Container, Row, Col } from "react-bootstrap";
import { Logo } from "../images/logolane.jsx";
import horlogo from "../images/hor-github-logo.png";
import borlogo from "../images/bor-github-logo.png";

export default function Footer() {
    return (
        <Container fluid className="mb-2">
        <Row>
          <Col
            style={{
              color: "white",
              display: "flex",
              alignItems: "flex-end",
              flexDirection: "row-reverse",
              alignItems: "center",
            }}
          >
            <a
              href="https://github.com/borjaruizreverter"
              target="_blank"
              style={{ width: "5%" }}
            >
              <img
                src={borlogo}
                alt="borlogo"
                style={{
                  width: "15%",
                  padding: "10px",
                  borderRadius: "50px",
                  width: "100%",
                }}
              />
            </a>
            <a
              href="https://github.com/horberlan"
              target="_blank"
              style={{ width: "5%" }}
            >
              <img
                src={horlogo}
                alt="horlogo"
                style={{
                  width: "15%",
                  padding: "10px",
                  borderRadius: "50px",
                  width: "100%",
                }}
              />
            </a>
            Mantained by
          </Col>
        </Row>
        <Row>
          <Col
            style={{
              color: "white",
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            All rights reserved 2022 ©
          </Col>
          <Col
            style={{
              color: "white",
              alignItems: "flex-end",
              display: "flex",
              flexDirection: "row-reverse",
            }}
          >
            <a
              href="https://www.laneartdesign.studio"
              target="_blank"
              style={{}}
            >
              <Logo />
            </a>
          </Col>
        </Row>
      </Container>
    );
  }
