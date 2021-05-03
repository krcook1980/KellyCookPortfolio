import React, { Component } from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { zoomIn } from "react-animations";
import styled, { keyframes } from 'styled-components';

const ZoomIn = styled.div`animation: 2s ${keyframes`${zoomIn}`}`;

export default class About extends Component {
    render() {
        return (
            <ZoomIn>
                <div className="text-white container About">
                <Nav />
                    <div className="row mt-6">
                        <div className="col-md-12">
                            <h1 className="h1">All About Kelly Cook</h1>
                            <p className="about">
                                <img className="profilePic rounded" src="https://github.com/krcook1980/FullStackPortfolio/blob/main/assets/IMG_7512.jpg?raw=true" alt="Kelly Cook" />
                            I am a fullstack developer. I enjoy both designing websites and working with databases, perhaps one day I will choose a favorite, but not today. I will have my University of Utah Program Completion Certificate at the end of May, 2021 with an A+ grade average. All of my group projects have garnered class voted awards. I am fully capable of working with HTML, CSS, JS, React, MySql, MongoDB, Node, Express, and more. I intend to continue my studies into Python, Java, and Amazon Web Services. 
                            </p>
                            <p className="about">
                                I am not just committed to succeed, but also to genuinely enjoy the journey of learning and growing my skills as a developer. I am able to utilize all the skills I learned in my past lives as a Project Manager, Accountant, School Finance Specialist, and even the hospitality industry, to better my understanding of client needs to exceed all expectations.
                            </p>
                            <p className="about">
                                I am an outgoing individual who loves to help others. I enjoy puzzles, problem solving, and building.  I am a wife, mother of two great girls, and fur-mom to a fun german shepard and a cat. I live in Park City, UT. I do not love the snow, but I love the area. I am inspired by black and white photography, I absolutely love elephants, and enjoy logic games.
                            </p>
                            <p className="about">
                                I am dedicated and will put forth 100% effort in order to succeed. I do all that I can to ensure that my
                                peers also have every opportunity for success.  I am able to take prior experience and apply it to new situations. I am eager to continually grow and learn. I strive daily to better myself in every way.
                            </p>
                        </div>
                        
                    </div>
                   
                </div>

                <Footer /> 
            </ZoomIn>
        )
    }
}
