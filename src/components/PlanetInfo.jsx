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

            <Tabs mobileView={true} filter={filter} setFilter={setFilter} name={name} />

            <Planet
                name={name}
                src={image}
                alt={`A picture pf the planet ${selectedPlanet}`}
            />

            <Info>
                <Tabs mobileView={false} filter={filter} setFilter={setFilter} name={name} />

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
    position: relative;

    /* Applying different sizes to different planets */

    @media (min-width: 768px) {
        ${props => props.name === "mercury" && `width: 25%`}
        ${props => props.name === "venus" && `width: 30%`}
        ${props => props.name === "earth" && `width: 34%`}
        ${props => props.name === "mars" && `width: 20%`}
        ${props => props.name === "jupiter" && `width: 40%`}
        ${props => props.name === "saturn" && `width: 42%`}
        ${props => props.name === "uranus" && `width: 36%`}
        ${props => props.name === "neptune" && `width: 38%`}
    }

    @media (min-width: 1024px) {
        ${props => props.name === "mercury" && `width: 30%`}
        ${props => props.name === "venus" && `width: 35%`}
        ${props => props.name === "earth" && `width: 38%`}
        ${props => props.name === "mars" && `width: 27%`}
        ${props => props.name === "jupiter" && `width: 42%`}
        ${props => props.name === "saturn" && `width: 44%`}
        ${props => props.name === "uranus" && `width: 40%`}
        ${props => props.name === "neptune" && `width: 43%`}
    }

    ${props => props.name === "mercury" && `width: 40%`}
    ${props => props.name === "venus" && `width: 45%`};
    ${props => props.name === "earth" && `width: 48%`};
    ${props => props.name === "mars" && `width: 37%`};
    ${props => props.name === "jupiter" && `width: 52%`}
    ${props => props.name === "saturn" && `width: 54%`}
    ${props => props.name === "uranus" && `width: 50%`}
    ${props => props.name === "neptune" && `width: 53%`}
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 768px) {
        width: 100vw;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: space-between;
        padding: 0 2.44rem;
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
        margin-right: 4.31rem;
    }
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

    @media (min-width: 768px) {
        text-align: left;
        font-size: 43px;
    }
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

    @media (min-width: 768px) {
        text-align: left;
        font-size: 14px;
        max-width: 32rem;
    }
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
    opacity: 0.5;

    @media (min-width: 768px) {
        font-size: 14px;
        line-height: 25px; /* 208.333% */
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
        width: 1rem;
        height: 1rem;
    }
`;