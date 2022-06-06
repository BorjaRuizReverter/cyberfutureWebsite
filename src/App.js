import React from "react";
import { TitleSvg } from "./images/titlesvg.jsx";
import SubTitulo from "./components/subtitle.js";
import Codebox from "./components/codebox";
import { Card, Button, CardCarousel } from "cyberfuture";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import { Logo } from "./images/logolane.jsx";
import horlogo from "./images/hor-github-logo.png";
import borlogo from "./images/bor-github-logo.png";
import LiveProv from "./components/liveprovider.js";

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5%;
  position: relative;
  margin: 0px auto;
  justify-content: space-around;
  justify-content: space-between;
  flex: 1;
  height: 5%;
`;

function App() {
  return (
    <>
      <div className="stars">
        <div className="twinkling">
          <section id="FirstSection">
            <div className="title">
              <TitleSvg />
            </div>
            <div className="below-title">
              <SubTitulo />
              <Codebox />
            </div>
          </section>
          <section id="SecondSection">
            <div className="paragraph mt-5">
              <h1>Primary buttons</h1>
              <h2>
                You can use CyberFuture`s custom styles to give some action to
                your boring buttons.
              </h2>
            </div>
            <div className="paragraph">
              <Flex>
                <Button outline text="BUTTON" variant="Matrix" color="matrix" />
                <Button
                  text="BUTTON"
                  variant="OutlinedCyberRose"
                  type="outlined"
                />
                <Button text="BUTTON" variant="Rose" />
                <Button text="BUTTON" variant="Punk" />
                <Button text="BUTTON" variant="Gold" />
                <Button text="BUTTON" variant="OutlinedCyberSly" />
              </Flex>
            </div>
            <div className="paragraph mt-5">
              <h2>You can play with the variants available in the codebox below!</h2>
              <li>Matrix</li>
              <li>Gold</li>
              <li>Rose</li>
              <li>Punk</li>
              <li>OutlinedCyberRose</li>
              <li>OutlinedCyberSly</li>
            </div>
            <LiveProv />
          </section>
          <section id="ThirdSection">
            <div className="paragraph">
              <h1>Cards</h1>
              <h2>
                Below there is some basic cards. Cards have no fixed width, so
                they'll fill the full width of its parent element. This can be
                easily customized with our sizing options.
              </h2>
            </div>
            <Flex>
              <Card
                variant="matrix"
                title="Card Title"
                body="some content"
                end={<Button text="button" variant="Punk" />}
              ></Card>
              <CardCarousel
                variant="rose"
                title="Card Title"
                body="some content"
                end={<Button text="button" variant="Rose" />}
              ></CardCarousel>
              <Card
                variant="matrix"
                title="Card Title"
                body={<div>content</div>}
                end={<Button text="button" variant="Matrix" />}
              ></Card>
            </Flex>
            <div className="paragraph mt-5">
            <h2>You can play with the following options in the codebox below!</h2>
              <li>Matrix</li>
              <li>Gold</li>
              <li>Rose</li>
              <li>Punk</li>
              <li>OutlinedCyberRose</li>
              <li>OutlinedCyberSly</li>
            </div>
          </section>
          <section id="Footer">
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
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
