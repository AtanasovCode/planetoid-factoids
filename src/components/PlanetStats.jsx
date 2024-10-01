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
    width: 90%;
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    grid-gap: 1rem;
    margin-top: 1.75rem;

    @media (min-width: 768px) {
        width: 95%;
        grid-template-columns: repeat(4, 1fr);
        margin-top: 0;
        grid-gap: 1.5rem;
        margin-top: 2.5rem;
    }

    @media (min-width: 1024px) {
        width: 80%;
        margin-top: 0;
    }

    @media (min-width: 1330px) {
        width: 75%;
    }
`;

const StatContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid rgba(255, 255, 255, .4);
    padding: 1rem 1.5rem;
    border-radius: 10px;

    @media (min-width: 768px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 1.2rem;
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