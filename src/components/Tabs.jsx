import styled from "styled-components";


const Tabs = ({
    mobileView,
    filter,
    setFilter,
}) => {

    return (
        <Container mobile={mobileView}>
            <Tab active={filter === "overview" && true} onClick={() => setFilter("overview")}>Overview</Tab>
            <Tab active={filter === "internal" && true} onClick={() => setFilter("internal")}>Structure</Tab>
            <Tab active={filter === "surface" && true} onClick={() => setFilter("surface")}>Surface</Tab>
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
            display: flex;
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
    font-size: 9px;
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
    }
`;