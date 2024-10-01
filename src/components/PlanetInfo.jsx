import { useEffect, useState } from "react";
import styled from "styled-components";

import sourceIcon from '../assets/icon-source.svg';

//importing reusable components
import Tabs from "./Tabs";


const PlanetInfo = ({
    selectedPlanet,
    filter,
    setFilter,
    name,
    wikipedia,
    image,
    description,
}) => {
    return (
        <Container>

            <Tabs mobileView={true} filter={filter} setFilter={setFilter} name={name} />

            <PlanetContainer>
                <Planet
                    name={selectedPlanet}
                    src={image}
                    alt={`A picture pf the planet ${selectedPlanet}`}
                />
            </PlanetContainer>

            <Info>
                <Tabs mobileView={false} filter={filter} setFilter={setFilter} name={name} />

                <Heading>
                    <Title> {name} </Title>

                    <Description>
                        {description}
                    </Description>

                    <Source href={wikipedia} target="_blank">
                        Source :
                        <Wikipedia>Wikipedia</Wikipedia>
                        <Icon src={sourceIcon} alt="source icon" />
                    </Source>
                </Heading>
            </Info>
        </Container>
    );
}

export default PlanetInfo;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 1024px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: stretch;
        margin: 2rem 0;
        width: 95%;
    }

    @media (min-width: 1330px) {
        width: 85%;
    }
`;

const PlanetContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem 1.2rem;
    width: 100%;

    @media (min-width: 768px) {
        margin: 3rem 0;
    }

    @media (min-width: 1024px) {
        margin: 0;
        flex: 100%;
    }
`;

const Planet = styled.img`
    width: 80%;
    position: relative;

    @media (min-width: 550px) {
        width: 50%;
    }
    
    @media (min-width: 768px) {
        width: 60%;
    }

    @media (min-width: 1024px) {
        width: 75%;
    }

    @media (min-width: 1330px) {
        width: 70%;
    }
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 768px) {
        flex: 100%;
        flex-direction: row-reverse;
        justify-content: space-between;
        width: 90%;
    }

    @media (min-width: 1024px) {
        flex-direction: column-reverse;
        align-items: flex-start;
        justify-content: flex-start;
    }

    @media (min-width: 1330px) {
        margin: 0 2.5rem;
    }
`;

const Heading = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 768px) {
        align-items: flex-start;
        flex: 100%;
        margin-right: 4rem;
    }

    @media (min-width: 1024px) {
        margin-right: 0;
    }
`;

const Title = styled.div`
    color: ${props => props.theme.color};
    text-align: center;
    font-family: Antonio;
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
    margin-bottom: 1.2rem;

    @media (min-width: 768px) {
        text-align: left;
        font-size: 4rem;
    }
`;

const Description = styled.div`
    color: ${props => props.theme.color};
    text-align: center;
    font-family: "Nunito Sans", sans-serif;
    font-size: .8rem;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    opacity: .9;
    max-width: 85%;

    @media (min-width: 550px) {
        max-width: 70%;
        font-size: .9rem;
    }

    @media (min-width: 768px) {
        text-align: left;
        font-size: 1rem;
        max-width: 100%;
        line-height: 1.4rem;
    }

    @media (min-width: 1330px) {
        font-size: 1.1rem;
        line-height: 1.6rem;
    }
`;

const Source = styled.a`
    text-decoration: none;
    color: ${props => props.theme.color};
    font-family: League Spartan;
    font-size: .7rem;
    font-style: normal;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    cursor: pointer;
    opacity: 0.7;

    @media (min-width: 768px) {
        font-size: .8rem;
    }

    @media (min-width: 1024px) {
        font-size: .9rem;
        margin: 1rem 0;
    }
`;

const Wikipedia = styled.div`
    text-decoration-line: underline;
    margin: 0 0.25rem;

    @media (min-widht: 768px) {
        margin: .5rem;
    }
`;

const Icon = styled.img`
    width: 0.75rem;
    height: 0.75rem;

    @media (min-width: 768px) {
        width: 0.9rem;
        height: 0.9rem;
    }
`;