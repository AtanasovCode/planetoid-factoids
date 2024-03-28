import { useState } from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

import menu from "../assets/navigation/menu.svg";
import arrow from "../assets/navigation/arrow.svg";
import close from "../assets/navigation/close.svg";
import starryBackground from "../assets/navigation/starry-background.svg";

const Nav = ({ selectedPlanet, setSelectedPlanet }) => {
  const [showNav, setShowNav] = useState(false);

  return (
    <Navigation>
      <Logo to="/">PlanetoidFactoids</Logo>

      <Menu src={menu} onClick={() => setShowNav(!showNav)} />

      <Links active={showNav}>
        <Close
          src={close}
          alt="close icon"
          onClick={() => setShowNav(!showNav)}
        />

        <NavLogo to="/">PlanetoidFactoids</NavLogo>

        <Comet />
        <Comet />
        <Comet />
        <Comet />
        <Comet />
        <Comet />
        <Comet />

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
  padding: 17px 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  @media (min-width: 768px) {
    flex-direction: column;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
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
  text-decoration: none;
  cursor: pointer;
  color: #fff;
  font-family: Antonio;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -1.05px;
  text-transform: uppercase;
  cursor: pointer;

  @media (min-width: 768px) {
    margin-bottom: 2.44rem;
    font-size: 28px;
    letter-spacing: -1.05px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 0;
  }
`;

const NavLogo = styled(Logo)`
    position: absolute;
    top: 20px;
    left: 20px;

    @media (min-width: 768px) {
        display: none;
    }
`

const Close = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Links = styled.div`
  position: absolute;
  width: 0;
  height: 100vh;
  top: 0;
  right: -100%;
  z-index: -1;
  padding-top: 6rem;
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  background-image: url(${starryBackground});
  background-size: 200%;
  background-repeat: repeat;
  overflow: hidden;
  transition: all 0.4s ease;

  ${(props) =>
    props.active &&
    `
        width: 100%;
        top: 0;
        right: 0;
        z-index: 99;
        opacity: 1;
    `}

  @media (min-width: 768px) {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    opacity: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: transparent;
    background-image: none;
    transition: none;
    height: auto;
    width: 100%;
    padding-top: 0;
  }

  @media (min-width: 1024px) {
    width: auto;
  }
`;

const PlanetLink = styled(NavLink)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding: 20px 24px 20px 32px;
  cursor: pointer;
  position: relative;
  text-decoration: none;

  &.active {
    background-color: rgba(255, 255, 255, 0.1);
    border-bottom: 0;
  }

  @media (min-width: 768px) {
    justify-content: center;
    border-bottom: 0;
    padding: 0;

    &.active {
      background-color: rgba(255, 255, 255, 0.2);
      border-radius: 15px;
    }
  }

  @media (min-width: 1024px) {
    margin-right: 33px;

    &.active {
      background-color: transparent;
      border-bottom: 1px solid #fff;
      border-radius: 0;
    }
  }
`;

const Planet = styled.div`
  color: ${(props) => props.theme.color};
  text-align: center;
  font-family: League Spartan;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
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
    line-height: 25px; /* 227.273% */
  }
`;

const PlanetColor = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-right: 25px;

  @media (min-width: 768px) {
    display: none;
  }
`;

const ArrowIcon = styled.img`
  @media (min-width: 768px) {
    display: none;
  }
`;

const Comet = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 4px;
  height: 4px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.1),
    0 0 0 8px rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 255, 255, 1);
  animation: animate 6s linear infinite;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-100%);
    width: 300px;
    height: 1px;
    background: linear-gradient(90deg, #fff, transparent);
  }

  @media (min-width: 768px) {
    display: none;
  }

  @keyframes animate {
    0% {
      transform: rotate(315deg) translateX(0);
      opacity: 1;
    }

    70% {
      opacity: 1;
    }

    100% {
      transform: rotate(315deg) translateX(-1500px);
      opacity: 0;
    }
  }

  &:nth-child(1) {
    top: -100%;
    right: 0;
    left: initial;
    animation-delay: 2s;
    animation-duration: 4s;
  }

  &:nth-child(2) {
    top: 27%;
    right: 0;
    left: initial;
    animation-delay: 4s;
    animation-duration: 3s;
    width: 6px;
    height: 6px;
  }

  &:nth-child(3) {
    top: 55%;
    right: 0;
    left: initial;
    animation-delay: 6s;
    animation-duration: 2s;
    width: 8px;
    height: 8px;
  }

  &:nth-child(4) {
    top: 85%;
    right: 0;
    left: initial;
    animation-delay: 1s;
    animation-duration: 7s;
    width: 2px;
    height: 2px;
  }

  &:nth-child(5) {
    top: -100%;
    right: 37%;
    left: initial;
    animation-delay: 6.8s;
    animation-duration: 6s;
    width: 10px;
    height: 10px;
  }

  &:nth-child(6) {
    top: -100%;
    right: 85%;
    left: initial;
    animation-delay: 4s;
    animation-duration: 7s;
    width: 3px;
    height: 3px;
  }

  &:nth-child(6) {
    top: -100%;
    right: 50%;
    left: initial;
    animation-delay: 3.8s;
    animation-duration: 5s;
    width: 8px;
    height: 8px;
  }
`;
