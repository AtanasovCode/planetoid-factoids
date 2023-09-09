import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <Navigation>
            <Logo>
                PlanetoidFactoid
            </Logo>

            <Links>
                <Planet>Mercury</Planet>
                <Planet>Venus</Planet>
                <Planet>Earth</Planet>
                <Planet>Mars</Planet>
                <Planet>Jupiter</Planet>
                <Planet>Saturn</Planet>
                <Planet>Uranus</Planet>
                <Planet>Neptune</Planet>
            </Links>
        </Navigation>
    );
}

export default Nav;

const Navigation = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 27px;
    border-bottom: 1px solid rgba(255, 255, 255, .2);
`;

const Logo = styled.div`
    color: ${props => props.theme.color};
    font-family: Antonio;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -1.05px;
    text-transform: uppercase;
    padding: 22px 32px;
    padding-bottom: 0;
`;


const Links = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 33px calc(41px - 33px);
    padding-bottom: 0;
`;

const Planet = styled(Link)`
    color: #FFF;
    font-family: League Spartan;
    font-size: 11px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px; /* 227.273% */
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-right: 33px;
    cursor: pointer;
    text-decoration: none;

    &:visited {
        color: #FFF;
    }
`;