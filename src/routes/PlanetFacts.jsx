import { useState } from "react";
import styled from "styled-components";

//importing reusable components
import Nav from "../components/Nav";
import PlanetStats from "../components/PlanetStats";
import PlanetInfo from "../components/PlanetInfo";

//importing data
import { planets } from "../assets/data/Data";

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

}) => {

    return (
        <Container>
            <Nav
                selectedPlanet={selectedPlanet}
                setSelectedPlanet={setSelectedPlanet}
            />

            <PageContent>
                <PlanetInfo
                    filter={filter}
                    setFilter={setFilter}
                    name={name}
                    image={image}
                    description={description}
                    wikipedia={wikipedia}
                    selectedPlanet={selectedPlanet}
                />
                <PlanetStats
                    rotation={rotation}
                    revolution={revolution}
                    temp={temp}
                    radius={radius}
                />
            </PageContent>
        </Container>
    );
}

export default PlanetFacts;

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: ${props => props.theme.background};
    //overflow-x: hidden;
`;

const PageContent = styled.div`

    @media (min-width: 1024px) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
    }
`;