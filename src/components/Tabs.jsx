import styled from "styled-components";


const Tabs = ({
    mobileView,
}) => {

    return (
        <Container mobile={mobileView}>
            <Tab>Overview</Tab>
            <Tab>Structure</Tab>
            <Tab>Surface</Tab>
        </Container>
    );
}

export default Tabs;

const Container = styled.div`
    
    //displays the mobile version of the tabs
    ${props => props.mobile && `
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        border-bottom: 1px solid rgba(255, 255, 255, .2);
        padding: 20px 0;
        
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
`;