import styled from "styled-components";

export const Container = styled.div`
    display:  flex;
    width: 1060px;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-top: 50px;
`;

export const Hero = styled.h1`
    width: 576px;
    font-family: 'Fira Code', sans-serif;
    font-size: 48px;
    font-weight: bold;
    text-shadow: 7px 7px 10px rgba(0,0,0,0.5);
    span {
        color: #CD99FE;
    }
`;

export const ImageProfile = styled.img`
    height: 400px;
    width: 400px;
    border-radius: 50%;
`;