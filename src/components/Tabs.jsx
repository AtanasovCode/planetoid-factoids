import { useState } from "react";
import styled from "styled-components";


const Tabs = ({
    mobileView,
    filter,
    setFilter,
    name,
}) => {

    const [colors, setColors] = useState([
        {
            name: "mercury",
            color: "#419EBB"
        },
        {
            name: "venus",
            color: "#EDA249"
        },
        {
            name: "earth",
            color: "#6D2ED5"
        },
        {
            name: "mars",
            color: "#D14C32"
        },
        {
            name: "jupiter",
            color: "#D83A34"
        },
        {
            name: "saturn",
            color: "#CD5120"
        },
        {
            name: "uranus",
            color: "#1EC1A2"
        },
        {
            name: "neptune",
            color: "#2D68F0"
        }
    ])
    

    const colorObject = colors.find((item) => item.name === name);
    const color = colorObject.color;


    return (
        <Container mobile={mobileView}>
            <Tab color={color} active={filter === "overview" && true} onClick={() => setFilter("overview")}>Overview</Tab>
            <Tab color={color} active={filter === "internal" && true} onClick={() => setFilter("internal")}>Structure</Tab>
            <Tab color={color} active={filter === "surface" && true} onClick={() => setFilter("surface")}>Surface</Tab>
        </Container>
    );
}

export default Tabs;

const Container = styled.div`
    
    //displays the mobile version of the tabs
    ${props => props.mobile && `
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        
        @media (min-width: 768px) {
            display: none;
        }
    `}

    ${props => props.mobile === false && `
        display: none;

        @media (min-width: 768px) {
            flex: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    `}
`;

const Tab = styled.div`
    flex: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.color};
    text-align: center;
    font-family: League Spartan;
    font-size: 11px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.929px;
    text-transform: uppercase;
    cursor: pointer;
    padding: 1.25rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, .2);
    transition: all .4s ease;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        width: 50%;
        height: 0.25rem;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        background-color: transparent;
        transition: all .4s ease;

        ${props => props.active && `
            background-color: #2D68F0;
        `}
    };

    @media (min-width: 768px) {
        width: 100%;
        text-align: left;
        border: 1px solid rgba(255, 255, 255, .2);
        font-size: 9px;
        line-height: 25px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: .5rem 2rem;
        margin-bottom: 1rem;
        
        ${props => props.active && `
            background-color: ${props.color};
        `}
        
        &::before {
            display: none;
        }
    }
`;