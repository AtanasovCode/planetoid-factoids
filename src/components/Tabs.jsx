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
            <Tab color={color} $active={filter === "overview" && true} onClick={() => setFilter("overview")}>Overview</Tab>
            <Tab color={color} $active={filter === "internal" && true} onClick={() => setFilter("internal")}>Structure</Tab>
            <Tab color={color} $active={filter === "surface" && true} onClick={() => setFilter("surface")}>Surface</Tab>
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
            border: 1px solid #000;
            flex: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        @media (min-width: 1024px) {
            width: 100%;
            flex: 0;
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
    font-family: "Nunito Sans", sans-serif;
    font-size: .6rem;
    font-style: normal;
    font-weight: 700;
    text-transform: uppercase;
    padding: 1.25rem 0;
    transition: background .3s ease;
    position: relative;
    border-radius: 16px;

    ${props => props.$active && `
        background-color: ${props.color};
    `};

    @media (min-width: 768px) {
        border: 1px solid rgba(255, 255, 255, .4);
        width: 100%;
        text-align: left;
        font-size: .7rem;
        line-height: 25px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: .5rem 2rem;
        margin-bottom: 1rem;
    }

    @media (min-width: 1024px) {
        cursor: pointer;
        &:hover {
            cursor: pointer;
            background-color: rgba(255, 255, 255, 0.2); // Lighter hover effect for all tabs
            border: none;
        }

        ${props => props.active && `
            background-color: ${props.color};
            border: none;

            &:hover {
                background-color: ${props => props.color};
            }
        `};
    }
`;
