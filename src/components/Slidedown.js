import React, {Component} from "react";
import {slideInDown} from "react-animations";
import styled, {keyframes} from 'styled-components';
import P3 from './P3'

const SlideInDown = styled.div`animation: 2s ${keyframes  `${slideInDown}`}`;

export default class SlideDown extends Component {
    render(){
        return(
            <SlideInDown><P3 /></SlideInDown>
        )
    }
}