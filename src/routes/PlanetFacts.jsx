import { useState } from "react";
import styled from "styled-components";

//importing reusable components
import Nav from "../components/Nav";
import PlanetStats from "../components/PlanetStats";
import PlanetInfo from "../components/PlanetInfo";

//importing data
import { planets } from "../assets/data/Data";

const PlanetFacts = () => {

    const [filter, setFilter] = useState("overview");

    return (
        <Container>
            <Nav />

            <PageContent>
                <PlanetInfo filter={filter} setFilter={setFilter} />
                <PlanetStats />
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
`;

const PageContent = styled.div``;