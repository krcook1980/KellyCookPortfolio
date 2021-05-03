import React, {Component} from "react";
import {slideInUp} from "react-animations";
import styled, {keyframes} from 'styled-components';
import P4 from './P4';

const SlideInUp = styled.div`animation: 2s ${keyframes  `${slideInUp}`}`;

export default class SlideUp extends Component {
    render(){
        return(
            <SlideInUp><P4 /></SlideInUp>
        )
    }
}