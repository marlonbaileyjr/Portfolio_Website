import React, { Component }  from 'react';
import {Button, Col,} from 'react-bootstrap';
import LinkedIn from '../assets/img/nav-icon1.png';

export const ProjectCard = ({ title, description, imgUrl, gitUrl }) => {
    return(
        
            <Col sm={6} md={4}>
                <a href={gitUrl} target="_blank" rel="noreferrer">
                    <div className='proj-imgbx'>
                        <img src={imgUrl}/>
                        <div className='proj-txtx'>
                            <h4>{title}</h4>
                            <span>{description}</span>
                        </div>
                    </div>
                </a>
            </Col>
    )
}