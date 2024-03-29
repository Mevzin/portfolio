import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 56px;
    width: 100vw;
    border-bottom: 1px solid #9600BF ;
    box-shadow: 0px 10px 200px #9600BF;
    justify-content: center;
`;

export const Navbar = styled.div`
    display: flex;
    height: 100%;
    width: 431px;
`;

export const RouteButton = styled.div`
    display: flex;
    height: 100%;
    padding: 0 10px;
    align-items: center;
    transition: ease-in 2s;
   
    &:hover{
        background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(0,212,255,0) 100%);;
    }
`;
