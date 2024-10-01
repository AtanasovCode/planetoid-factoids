import { useState } from "react";
import styled from "styled-components";

//importing reusable components
import Nav from "../components/Nav";
import PlanetStats from "../components/PlanetStats";
import PlanetInfo from "../components/PlanetInfo";

//importing data
import { planets } from "../assets/data/Data";

import starryBG from '../assets/starry-background.svg';

const PlanetFacts = ({
    selectedPlanet,
    setSelectedPlanet,
    filter,
    setFilter,
    name,
    wikipedia,
    rotation,
    revolution,
    radius,
    temp,
    image,
    description,
    planetImage,
}) => {

    return (
        <Container>
            <PageContent>
                <Nav
                    selectedPlanet={selectedPlanet}
                    setSelectedPlanet={setSelectedPlanet}
                />
                <Wrapper>
                    <PlanetInfo
                        filter={filter}
                        setFilter={setFilter}
                        name={name}
                        image={image}
                        planetImage={planetImage}
                        description={description}
                        wikipedia={wikipedia}
                        selectedPlanet={selectedPlanet}
                    />
                </Wrapper>
            </PageContent>
            <Wrapper>
                <PlanetStats
                    rotation={rotation}
                    revolution={revolution}
                    temp={temp}
                    radius={radius}
                />
            </Wrapper>
        </Container>
    );
}

export default PlanetFacts;

const Container = styled.div`
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    overflow-x: hidden;
    background-color: ${props => props.theme.background};
    padding-bottom: 1.2rem;
`;

const PageContent = styled.div`

    @media (min-width: 1024px) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
    }
`;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;