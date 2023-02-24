import React, { Component }  from 'react';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import movieLandimg from "../assets/img/project-img1.png";
import PortfolioPage from "../assets/img/project-img2.png";
import {ProjectCard} from "./ProjectCard";
import comingsoon from "../assets/img/comingsoon.png";
import ChatAppDesktop from "../assets/img/project-img3.png";




export const Projects = () => {
    const projects1 = [
        {
            title: "Movie Land",
            description: "API, Design, Development",
            imgUrl: movieLandimg,
        },
        {
            title: "ChatApp Mobile",
            description: "React Native, MongoDB, Express, Node.js, Socket.io, Expo",
            imgUrl: comingsoon,
            gitUrl: "https://github.com/marlonbaileyjr23/ChatApp-ReactNative"
        },
        {
            title: "ChatApp Desktop",
            description: "Electron, MongoDB, Express, Node.js, Socket.io",
            imgUrl: ChatAppDesktop,
            gitUrl: "https://github.com/marlonbaileyjr23/Chat-App"
        },
        {
            title: "Portfolio Website",
            description: "React, MongoDB, Express, Node.js, Socket.io",
            imgUrl: PortfolioPage,
            gitUrl: "https://github.com/marlonbaileyjr23/Portfolio_Website"
        },
        ];

    return(
        <section className='project' id='projects'>
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>My Current Projects</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Personal Projects</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects1.map((project, index) => {
                                            return(
                                                <ProjectCard 
                                                    key={index}
                                                    {...project}/>
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}