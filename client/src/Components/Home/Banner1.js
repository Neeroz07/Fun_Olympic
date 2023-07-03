import { useState, useEffect } from "react";
import headerImg from "./1.png";
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import './Banner1.css';

export const Banner1 = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index,setIndex] = useState(1);
  const toRotate = ["2023 Fun", "Olympic", "Games"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
  
    return () => {
      clearInterval(ticker);
    };
  }, [text]);
  

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum((prevLoopNum) => prevLoopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 xl:w-7/12">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={`${
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }`}
                >
                  <h1>
                    {`Welcome To`}{" "}
                    <span
                      className="text-aqua-500 text-3xl"
                      data-period="1000"
                      data-rotate='["2023 Fun", "Olympic", "Games"]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p className="text-aqua-700">
                  The FunOlympic committee have decided that they require a few additional projects which need to 
                    be completed before the games start to ensure the games run smoothly and that worldwide audiences 
                        can enjoy the games online.
                  </p>
                </div>
              )}
            </TrackVisibility>
          </div>
          <div className="w-full md:w-1/2 xl:w-5/12">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={`${
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }`}
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner1;
