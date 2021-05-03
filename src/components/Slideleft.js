import React, {Component} from "react";
import {slideInLeft} from "react-animations";
import styled, {keyframes} from 'styled-components'
import P2 from "./P2"

const SlideInLeft = styled.div`animation: 2s ${keyframes  `${slideInLeft}`}`;

export default class SlideLeft extends Component {
    render(){
        return(
            <SlideInLeft><P2 /></SlideInLeft>
        )
    }
}