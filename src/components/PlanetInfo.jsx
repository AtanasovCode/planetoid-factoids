import { useEffect, useState } from "react";
import styled from "styled-components";

import sourceIcon from '../assets/icon-source.svg';

//importing reusable components
import Tabs from "./Tabs";

import p from '../assets/planets/3.svg';

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

            <Tabs mobileView={true} filter={filter} setFilter={setFilter} />

            <Planet
                src={image}
                alt={`A picture pf the planet ${selectedPlanet}`}
            />

            <Info>
                <Tabs mobileView={false} />

                <Heading>
                    <Title> {name} </Title>

                    <Description>
                        {description}
                    </Description>

                    <Source href={wikipedia}  target="_blank">
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
`;

const Planet = styled.img`
    width: 47%;
    margin: 4.19rem 0;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.div`
    color: ${props => props.theme.color};
    text-align: center;
    font-family: Antonio;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
    margin-bottom: 1rem;
`;

const Description = styled.div`
    color: ${props => props.theme.color};
    text-align: center;
    font-family: Spartan;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 200% */
    max-width: 20.4375rem;
    opacity: .9;
`;

const Source = styled.a`
    text-decoration: none;
    color: ${props => props.theme.color};
    font-family: League Spartan;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5625rem; /* 208.333% */
    opacity: .5;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    cursor: pointer;
`;

const Wikipedia = styled.div`
    opacity: 0.5;
    color: ${props => props.theme.color};
    font-family: League Spartan;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5625rem;
    text-decoration-line: underline;
    margin: 0 4px;
`;

const Icon = styled.img`
    width: 0.75rem;
    height: 0.75rem;
`;