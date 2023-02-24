import {useState, useEffect} from 'react';
import React, { Component }  from 'react';
import { Row,Container,Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['Web Developer', 'Software Engineer', 'Full Stack Developer'];
    const [text, setText] = useState('');
    const [delta, setDelta]=useState(300-Math.random()*100);
    const period = 1000;
    const [index, setIndex] = useState(1);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta )

        return () => {clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);
        if (isDeleting){
            setDelta(prevDelta=>prevDelta/2);
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
          }
    }


    return(
        <section className='banner' id='home'> 
            <div className='blurry-bg'></div>
            <div className='info'>
                <Container className='words-logo'>
                    <Row className="align-items-center">
                        <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm a `} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Highly motivated computer science student at Fairleigh Dickinson University, with a strong foundation in programming
and a passion for solving complex problems. Experienced in web development and machine learning. Key strengths
include strong analytical abilities, experience in Node.js and JavaScript, including building of several back-end systems to
power web and mobile apps.</p>
              </div>}
            </TrackVisibility>
                        </Col>
                        <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
                        </Col>
                    </Row>
                </Container>
            </div>    
        </section>
    )
}