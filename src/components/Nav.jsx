import { useState } from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

import logo from '../assets/logo.svg';
import menu from "../assets/navigation/menu.svg";
import arrow from "../assets/navigation/arrow.svg";
import close from "../assets/navigation/close.svg";
import starryBackground from "../assets/navigation/starry-background.svg";

const Nav = ({ setSelectedPlanet, setFilter }) => {
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

        <NavLogo>
          <Close
            src={close}
            alt="close icon"
            onClick={() => setShowNav(!showNav)}
          />
          <MobileLogoIcon
            src={logo}
            alt="PlanetoidFactoids mobile navigation logo"
          />
        </NavLogo>
        <PlanetLinksWrapper>
          <PlanetLink
            to="/planets/mercury"
            onClick={() => {
              setShowNav(!showNav);
              setSelectedPlanet("mercury");
              setFilter("overview");
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
              setFilter("overview");
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
              setFilter("overview");
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
              setFilter("overview");
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
              setFilter("overview");
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
              setFilter("overview");
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
              setFilter("overview");
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
              setFilter("overview");
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
  padding: 1.1rem 1.5rem;
  border-bottom: 2px solid rgba(255, 255, 255, .3);
  margin-bottom: .5rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1.4rem 1.8rem;
  }
`;

const Menu = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

const Logo = styled(Link)`
  cursor: pointer;
  width: 45%;

  @media (min-width: 550px) {
    width: 33%;
  }

  @media (min-width: 768px) {
    width: 25%;
  }

  @media (min-width: 1024px) {
    width: 15%;
  }
`;

const LogoIcon = styled.img`
  width: 100%;
`;

const MobileLogoIcon = styled.img`
  width: 50%;

  @media (min-width: 550px) {
    width: 35%;
  }
`;

const NavLogo = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 3.5rem;
    position: relative;

    @media (min-width: 1024px) {
        display: none;
    }
`

const Close = styled.img`
  width: 17px;
  height: 17px;
  position: absolute;
  left: 4%;
  cursor: pointer;

  @media (min-width: 1024px) {
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

  @media (min-width: 550px) {
    border-left: 2px solid rgba(255, 255, 255, .4);
    width: 70%;
  }

  @media (min-width: 768px) {
    width: 50%;
  }

  ${(props) =>
    props.active &&
    `
        width: 100%;
        top: 0;
        right: 0;
        z-index: 9999;
        opacity: 1;
    `}

  @media (min-width: 1024px) {
    top: auto;
    left: auto;
    right: auto;
    z-index: 1;
    opacity: 1;
    padding: 0;
    position: relative;
    background-color: transparent;
    transition: none;
    height: 100%;
    width: 100%;
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

  @media (min-width: 1024px) {
    flex: auto;
    height: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
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

  @media (min-width: 1024px) {
    width: auto;
    justify-content: center;
    border-bottom: 0;
    padding: 0;
    margin-right: 2rem;

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
