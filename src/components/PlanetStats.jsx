import styled from "styled-components";

const PlanetStats = ({
    rotation,
    revolution,
    radius,
    temp,
}) => {
    return (
        <Container>
            <StatContainer>
                <Name>Rotation Time</Name>
                <Stat>{rotation}</Stat>
            </StatContainer>

            <StatContainer>
                <Name>Revolution Time</Name>
                <Stat>{revolution}</Stat>
            </StatContainer>

            <StatContainer>
                <Name>Radius</Name>
                <Stat>{radius}</Stat>
            </StatContainer>

            <StatContainer>
                <Name>Average Temp.</Name>
                <Stat>{temp}</Stat>
            </StatContainer>
        </Container>
    );
}

export default PlanetStats;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1.75rem;
    margin-bottom: 60px;

    @media (min-width: 768px) {
        width: 100vw;
        flex-direction: row;
        justify-content: space-evenly;
    } 
`;

const StatContainer = styled.div`
    width: 80vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid rgba(255, 255, 255, .2);
    padding: 1rem 1.5rem;
    margin-bottom: .5rem;

    @media (min-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: 1rem;
        margin-bottom: 0;
        width: auto;
    }
`;

const Name = styled.div`
    color: ${props => props.theme.color};
    font-family: League Spartan;
    opacity: .8;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px; /* 200% */
    letter-spacing: 0.727px;
    text-transform: uppercase;

    @media (min-width: 768px) {
        font-size: 12px;
        opacity: .7;
    }

    @media (min-width: 1024px) {
        font-size: 12px;
    }
`;

const Stat = styled.div`
    color: ${props => props.theme.color};
    text-align: right;
    font-family: Antonio;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.75px;
    text-transform: uppercase;

    @media (min-width: 768px) {
        font-size: 24px;
        letter-spacing: -0.9px;
    }

    @media (min-width: 1024px) {
        font-size: 26px;
        letter-spacing: -1.5px;
    }
`;