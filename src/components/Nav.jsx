import { useState } from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

import logo from '../assets/logo.svg';
import menu from "../assets/navigation/menu.svg";
import arrow from "../assets/navigation/arrow.svg";
import close from "../assets/navigation/close.svg";
import starryBackground from "../assets/navigation/starry-background.svg";

const Nav = ({ selectedPlanet, setSelectedPlanet }) => {
  const [showNav, setShowNav] = useState(false);

  return (
    <Navigation>
      <Logo to="/">
        <LogoIcon
          src={logo}
          alt="planetoidfactoids logo"
        />
      </Logo>

      <Menu src={menu} onClick={() => setShowNav(!showNav)} />

      <Links active={showNav}>

        <NavLogo to="/">
          <Close
            src={close}
            alt="close icon"
            onClick={() => setShowNav(!showNav)}
          />
          <MobileLogoIcon
            src={logo}
            alt="logo icon"
          />
        </NavLogo>
        <PlanetLinksWrapper>
          <PlanetLink
            to="/planets/mercury"
            onClick={() => {
              setShowNav(!showNav);
              setSelectedPlanet("mercury");
            }}
          >
            <Planet>
              <PlanetColor color="#DEF4FC" />
              Mercury
            </Planet>
            <ArrowIcon src={arrow} />
          </PlanetLink>

          <PlanetLink
            to="/planets/venus"
            onClick={() => {
              setShowNav(!showNav);
              setSelectedPlanet("venus");
            }}
          >
            <Planet>
              <PlanetColor color="#F7CC7F" />
              Venus
            </Planet>
            <ArrowIcon src={arrow} />
          </PlanetLink>

          <PlanetLink
            to="/planets/earth"
            onClick={() => {
              setShowNav(!showNav);
              setSelectedPlanet("earth");
            }}
          >
            <Planet>
              <PlanetColor color="#545BFE" />
              Earth
            </Planet>
            <ArrowIcon src={arrow} />
          </PlanetLink>

          <PlanetLink
            to="/planets/mars"
            onClick={() => {
              setShowNav(!showNav);
              setSelectedPlanet("mars");
            }}
          >
            <Planet>
              <PlanetColor color="#FF6A45" />
              Mars
            </Planet>
            <ArrowIcon src={arrow} />
          </PlanetLink>

          <PlanetLink
            to="/planets/jupiter"
            onClick={() => {
              setShowNav(!showNav);
              setSelectedPlanet("jupiter");
            }}
          >
            <Planet>
              <PlanetColor color="#ECAD7A" />
              Jupiter
            </Planet>
            <ArrowIcon src={arrow} />
          </PlanetLink>

          <PlanetLink
            to="/planets/saturn"
            onClick={() => {
              setShowNav(!showNav);
              setSelectedPlanet("saturn");
            }}
          >
            <Planet>
              <PlanetColor color="#FCCB6B" />
              Saturn
            </Planet>
            <ArrowIcon src={arrow} />
          </PlanetLink>

          <PlanetLink
            to="/planets/uranus"
            onClick={() => {
              setShowNav(!showNav);
              setSelectedPlanet("uranus");
            }}
          >
            <Planet>
              <PlanetColor color="#65F0D5" />
              Uranus
            </Planet>
            <ArrowIcon src={arrow} />
          </PlanetLink>

          <PlanetLink
            to="/planets/neptune"
            onClick={() => {
              setShowNav(!showNav);
              setSelectedPlanet("neptune");
            }}
          >
            <Planet>
              <PlanetColor color="#497EFA" />
              Neptune
            </Planet>
            <ArrowIcon src={arrow} />
          </PlanetLink>
        </PlanetLinksWrapper>
      </Links>
    </Navigation>
  );
};

export default Nav;

const Navigation = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 1.1rem 1.4rem;

  @media (min-width: 768px) {
    align-items: stretch;
    flex-direction: column;
    border-bottom: 2px solid rgba(255, 255, 255, .3);

  }

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1.4rem 1.8rem;
  }
`;

const Menu = styled.img`
  width: 24px;
  height: 17px;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Logo = styled(Link)`
  cursor: pointer;
  width: 175px;

  @media (min-width: 768px) {
    margin-bottom: 2.44rem;
    width: 250px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 0;
    width: 225px;
  }
`;

const LogoIcon = styled.img`
  width: 100%;
`;

const MobileLogoIcon = styled.div`
  width: 55%;

  @media (min-width: 550px) {
    width: 35%;
  }
`;

const NavLogo = styled(Logo)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 3.5rem;
    position: relative;

    @media (min-width: 768px) {
        display: none;
    }
`

const Close = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  left: 4%;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Links = styled.div`
  position: fixed;
  height: 100dvh;
  top: 0;
  right: -100%;
  z-index: -1;
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  overflow: hidden;
  transition: all 0.4s ease;
  padding: 1.5rem 0;

  ${(props) =>
    props.active &&
    `
        width: 100%;
        top: 0;
        right: 0;
        z-index: 9999;
        opacity: 1;
    `}

  @media (min-width: 768px) {
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    opacity: 1;
    padding: 0;
    position: relative;
    background-color: transparent;
    transition: none;
    height: 100%;
    width: 300%;
  }

  @media (min-width: 1024px) {
    width: auto;
  }
`;

const PlanetLinksWrapper = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  @media (min-width: 768px) {
    flex: auto;
    height: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const PlanetLink = styled(NavLink)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  padding: 1rem;
  cursor: pointer;
  position: relative;
  text-decoration: none;

  &.active {
    background-color: rgba(255, 255, 255, 0.2);
    border-bottom: 0;
  }

  @media (min-width: 768px) {
    height: 100%;
    justify-content: center;
    border-bottom: 0;
    padding: 0;

    &.active {
      background-color: transparent;
      border-bottom: 0;
    }

    &.active::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: white;
      bottom: 0;
      left: 0;
    }
  }

  @media (min-width: 1024px) {
    margin-right: 2rem;
  }
`;

const Planet = styled.div`
  color: ${(props) => props.theme.color};
  text-align: center;
  font-family: League Spartan;
  font-size: .8rem;
  font-style: normal;
  font-weight: 600;
  line-height: 25px; /* 166.667% */
  letter-spacing: 1.364px;
  text-transform: uppercase;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    font-size: 11px;
    letter-spacing: 1px;
  }

  @media (min-width: 1024px) {
    line-height: 25px;
  }
`;

const PlanetColor = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-right: 1.3rem;

  @media (min-width: 768px) {
    display: none;
  }
`;

const ArrowIcon = styled.img`
  @media (min-width: 768px) {
    display: none;
  }
`;
