import React from 'react';
import styled from 'styled-components';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';

const Container = styled.div`
    height: calc(100vh - 50px);
    background-color: coral;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${(props) => props.direction === 'left' && '10px'};
    right: ${(props) => props.direction === 'right' && '10px'};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
    :hover {
        opacity: 1;
    }
`;

function Hero() {
    return (
        <Container>
            <Arrow direction='left'>
                <ArrowLeftOutlined />
            </Arrow>
            <Arrow direction='right'>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    );
}

export default Hero;
