import { SendOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`;
const Description = styled.p`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    text-align: center;
`;
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    border-radius: 20px;
    /* padding: 0 20px; */
    margin-bottom: 20px;
    overflow: hidden;
`;
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
    &:focus {
        outline: none;
    }
    &::placeholder {
        font-weight: 300;
        color: gray;
    }
`;
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
    /* border-radius: 50%; */
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
        background-color: #16c79a;
    }
`;

function Newsletter() {
    return (
        <Container>
            <Title>Suscribite</Title>
            <Description>Enterate cuando agrego productos nuevos!!</Description>
            <InputContainer>
                <Input placeholder='Email' />
                <Button>
                    <SendOutlined />
                </Button>
            </InputContainer>
        </Container>
    );
}

export default Newsletter;
