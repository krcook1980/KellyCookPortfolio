import React, {Component} from "react";
import {slideInRight} from "react-animations";
import styled, {keyframes} from 'styled-components';
import P1 from "./P1"

const SlideInRight = styled.div`animation: 2s ${keyframes  `${slideInRight}`}`;

export default class SlideRight extends Component {
    render(){
        return(
            <SlideInRight><P1 /></SlideInRight>
        )
    }
}