import React from 'react';
import styled from 'styled-components';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';

const Container = styled.div`
    width: 100%;
    height: calc(100vh - 90px);
    display: flex;
    position: relative;
    overflow: hidden;
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
        animation: arrow 0.2s forwards;
    }
    @keyframes arrow {
        from {
            opacity: 0.5;
        }
        to {
            opacity: 1;
            box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2);
        }
    }
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
    width: 100vw;
    /* height: 100vh; */
    display: flex;
    align-items: center;
`;

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
    display: flex;
    align-items: center;
`;

const Image = styled.img`
    height: 80%;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Title = styled.h1`
    font-size: 70px;
`;

const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`;

function Hero() {
    return (
        <Container>
            <Arrow direction='left'>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper>
                <Slide bg={'#fbf0f4'}>
                    <ImgContainer>
                        <Image src='https://i.ibb.co/XsdmR2c/1.png' />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>Summer Sale</Title>
                        <Desc>
                            Don't miss out on the best deals this summer!
                        </Desc>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                </Slide>
                <Slide bg={'#fbf0f4'}>
                    <ImgContainer>
                        <Image src='https://i.ibb.co/XsdmR2c/1.png' />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>Summer Sale</Title>
                        <Desc>
                            Don't miss out on the best deals this summer!
                        </Desc>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                </Slide>
            </Wrapper>
            <Arrow direction='right'>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    );
}

export default Hero;
