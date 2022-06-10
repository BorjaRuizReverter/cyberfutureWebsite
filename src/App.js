import React from "react";
import { TitleSvg } from "./images/titlesvg.jsx";
import SubTitulo from "./components/subtitle.js";
import Codebox from "./components/codebox";
import { Card, Button, CardCarousel } from "cyberfuture";
import styled from "styled-components";
import LiveProvBut from "./components/liveProviderForButtons.js";
import LiveProvCard from "./components/liveProviderForCards.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/footer.js";

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
              <h2>
                You can play with the variants available in the codebox below!
              </h2>
              <li>Matrix</li>
              <li>Gold</li>
              <li>Rose</li>
              <li>Punk</li>
              <li>OutlinedCyberRose</li>
              <li>OutlinedCyberSly</li>
            </div>
            <LiveProvBut />
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
              <h2>
                You can play with the following options in the codebox below!
              </h2>
              <li>Matrix</li>
              <li>Gold</li>
              <li>Rose</li>
              <li>Punk</li>
              <li>OutlinedCyberRose</li>
              <li>OutlinedCyberSly</li>
            </div>
            <LiveProvCard />
          </section>
          <section id="Footer">
            <Footer />
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
