import { Parallax } from "react-scroll-parallax";
import { TitleSvg } from "./images/titlesvg.jsx";
import BG from "./images/BG.svg";

const Titulo = () => (
  <>
    <Parallax scale={[-0.5, 1]} opacity={[0, 1]} translateY={[-100,100]}>
      <div className="title">
        <TitleSvg width="100%" />
      </div>
    </Parallax>
    {/* <Parallax speed={30}>
      <div className="subtitle">
        <p>The future is yours</p>
      </div>
    </Parallax> */}
  </>
);

export default Titulo;
