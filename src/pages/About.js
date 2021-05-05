import React, { Component } from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { zoomIn } from "react-animations";
import styled, { keyframes } from 'styled-components';
import Main from "../components/Main"

const ZoomIn = styled.div`animation: 2s ${keyframes`${zoomIn}`}`;

export default class About extends Component {
    render() {
        return (
            <div className="text-white container About">
                <ZoomIn>
                    <Nav />
                    <Main />
                    <Footer />
                </ZoomIn>
                
            </div>
        )
    }
}
