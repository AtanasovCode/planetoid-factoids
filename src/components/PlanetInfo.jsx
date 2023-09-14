import styled from "styled-components";

import sourceIcon from '../assets/icon-source.svg';

//importing reusable components
import Tabs from "./Tabs";

import p from '../assets/planets/3.svg';

const PlanetInfo = ({
    filter,
    setFilter,
}) => {
    return (
        <Container>

            <Tabs mobileView={true} filter={filter} setFilter={setFilter} />

            <Planet src={p} alt="picture of the currently selected planet" />

            <Info>
                <Tabs mobileView={false} />

                <Heading>
                    <Title>Earth</Title>

                    <Description>
                        Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.
                    </Description>

                    <Source>
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
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 200% */
    max-width: 20.4375rem;
`;

const Source = styled.div`
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
`;

const Wikipedia = styled.span`
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