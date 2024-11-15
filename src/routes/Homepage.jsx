import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

import planet1 from '../assets/planets/mercury.svg';
import planet2 from '../assets/planets/venus.svg';
import planet3 from '../assets/planets/earth.svg';
import planet4 from '../assets/planets/mars.svg';
import planet5 from '../assets/planets/jupiter.svg';
import planet6 from '../assets/planets/saturn.svg';
import planet7 from '../assets/planets/uranus.svg';
import planet8 from '../assets/planets/neptune.svg';


import starryBG from '../assets/starry-background.svg';

import Nav from "../components/Nav";


const Homepage = ({
    selectedPlanet,
    setSelectedPlanet,
    setFilter,
}) => {

    //values used to represent X, Y coordinates for falling star
    const [cometX, setCometX] = useState();
    const [cometY, setCometY] = useState();

    const getRandomFallingStar = () => {

    }


    return (
        <Container>
            <Nav
                selectedPlanet={selectedPlanet}
                setSelectedPlanet={setSelectedPlanet}
                setFilter={setFilter}
            />

            <PageContent>
                <Heading>
                    <Title>
                        Explore our cosmic neighbors
                    </Title>

                    <Subtitle>
                        [Click on a planet to see some cool facts!]
                    </Subtitle>
                </Heading>

                <Planets>

                    <Comet />
                    <Comet />
                    <Comet />
                    <Comet />
                    <Comet />

                    <PlanetWrapper
                        name={`"Mercury"`}
                        to="/planets/mercury"
                        onClick={() => setSelectedPlanet("mercury")}
                    >
                        <Planet id="p1" src={planet1} size="3vw" mSize="12vw" />
                    </PlanetWrapper>

                    <PlanetWrapper
                        name={'"Venus"'}
                        to="/planets/venus"
                        onClick={() => setSelectedPlanet("venus")}
                    >
                        <Planet id="p2" src={planet2} size="4.98vw" mSize="14.96vw" />
                    </PlanetWrapper>

                    <PlanetWrapper
                        name={'"Earth"'}
                        to="/planets/earth"
                        onClick={() => setSelectedPlanet("earth")}
                    >
                        <Planet id="p3" src={planet3} size="6.27vw" mSize="18.27vw" />
                    </PlanetWrapper>

                    <PlanetWrapper
                        name={'"Mars"'}
                        to="/planets/mars"
                        onClick={() => setSelectedPlanet("mars")}
                    >
                        <Planet id="p4" src={planet4} size="2.25vw" mSize="8vw" />
                    </PlanetWrapper>

                    <PlanetWrapper
                        name={'"Jupiter"'}
                        to="/planets/jupiter"
                        onClick={() => setSelectedPlanet("jupiter")}
                    >
                        <Planet id="p5" src={planet5} size="13vw" mSize="20vw" />
                    </PlanetWrapper>

                    <PlanetWrapper
                        name={'"Saturn"'}
                        $saturn={true}
                        to="/planets/saturn"
                        onClick={() => setSelectedPlanet("saturn")}
                    >
                        <Planet id="p6" src={planet6} size="15vw" mSize="25vw" />
                    </PlanetWrapper>

                    <PlanetWrapper
                        name={'"Uranus"'}
                        to="/planets/uranus"
                        onClick={() => setSelectedPlanet("uranus")}
                    >
                        <Planet id="p7" src={planet7} size="8vw" mSize="16vw" />
                    </PlanetWrapper>

                    <PlanetWrapper
                        name={'"Neptune"'}
                        to="/planets/neptune"
                        onClick={() => setSelectedPlanet("neptune")}
                    >
                        <Planet id="p8" src={planet8} size="7vw" mSize="14vw" />
                    </PlanetWrapper>
                </Planets>
            </PageContent>
        </Container>
    );
}

export default Homepage;

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: #02001afa;
`;

const PageContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 4rem;
`;

const Heading = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 4rem;
`;

const Title = styled.div`
    color: ${props => props.theme.color};
    font-family: Antonio;
    font-size: 38px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -1.05px;
    margin-bottom: 1rem;

    @media (max-width: 550px) {
        font-size: 26px;
    }
`;

const Subtitle = styled.div`
    color: ${props => props.theme.color};
    opacity: .7;
    font-family: Antonio;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.05px;

    @media (max-width: 550px) {
        font-size: 12px;
    }
`;

const Planets = styled.div`
    background-image: url(${starryBG});
    background-size: 100%;
    background-repeat: repeat;
    background-position: center;
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: ${props => props.theme.spaceBackground};
    padding: 1rem;
    padding-top: 2.5rem;
    overflow: hidden;

    @media (max-width: 550px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 1rem;
        place-items: center;
    }
`;

const PlanetWrapper = styled(Link)`

    position: relative;

    &::before {
        content: ${props => props.name};
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translateX(-50%);
        color: #fff;
        font-size: 3px;
        z-index: -1;
        font-family: Antonio;
        transition: all .7s ease;
        opacity: 0;
        text-decoration: none;
    }

    &:hover::before {
        opacity: 1;
        z-index: 2;
        top: ${props => props.$saturn ? "-15px" : "-35px"};
        font-size: 20px;
    }
`;

const Planet = styled.img`
    width: ${props => props.size};
    height: ${props => props.size};
    cursor: pointer;
    transition: all .6s ease;
    position: relative;

    @media (min-width: 1024px) {
        &:hover {
            width: calc(${props => props.size} + 3vw);
            height: calc(${props => props.size} + 3vw);
        }
    }

    @media (max-width: 550px) {
        width: ${props => props.mSize};
        height: ${props => props.mSize};
    }

    //creating the title card on hover

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100px;
        height: 100px;
        background-color: #fff;
        z-index: 1000;
    }
`;


const Comet = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 4px;
    height: 4px;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.1), 0 0 0 8px rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 255, 255, 1);
    animation:  animate 6s linear infinite;

    &::before{
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-100%);
        width: 300px;
        height: 1px;
        background: linear-gradient(90deg, #fff, transparent);
    }

    @keyframes animate {
        0% {
            transform: rotate(315deg) translateX(0);
            opacity: 1;
        }

        70% {
            opacity: 1;

        }

        100% {
            transform: rotate(315deg) translateX(-1500px);
            opacity: 0;

        }
    }

    &:nth-child(1){
        top: -100%;
        right: 0;
        left:initial;
        animation-delay: 2s;
        animation-duration: 4s;
    }

    &:nth-child(2){
        top: -100%;
        right: 25%;
        left:initial;
        animation-delay: 4s;
        animation-duration: 3s;
        width: 6px;
        height: 6px;
    }

    &:nth-child(3){
        top: -100%;
        right: 46%x;
        left:initial;
        animation-delay: 6s;
        animation-duration: 2s;
        width: 8px;
        height: 8px;
    }

   
    &:nth-child(4){
        top: -100%;
        right: 85%;
        left:initial;
        animation-delay:1s ;
        animation-duration: 7s;
        width: 2px;
        height: 2px;
    }

    &:nth-child(4){
        top: -100%;
        right: 57%;
        left:initial;
        animation-delay: 1.8s;
        animation-duration: 4s;
        width: 8px;
        height: 8px;
    }
`;