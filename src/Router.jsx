import { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import styled from "styled-components";
import { ThemeProvider } from "styled-components";



import { GlobalStyle } from "./GlobalStyle";

const theme = {
    //Colors
    color: "#fff",
    background: "#141155",

    //Typography
    antonio: 'Antonio',
    spartan: 'League Spartan',
}

//importing routes
import Homepage from './routes/Homepage';
import PlanetFacts from './routes/PlanetFacts';

import { planets } from './assets/data/Data';

const Router = () => {

    const [selectedPlanet, setSelectedPlanet] = useState("earth");


    const planet = planets.find((planet) => planet.name === selectedPlanet);

    const [filter, setFilter] = useState("overview");

    const {
        description,
        image,
    } = planet[filter];

    const {
        name,
        wikipedia,
        rotation,
        revolution,
        radius,
        temp
    } = planet;

    const planetImage = planet.overview.image;

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Homepage
                selectedPlanet={selectedPlanet}
                setSelectedPlanet={setSelectedPlanet}
                setFilter={setFilter}
            />
        },
        {
            path: "/planets/:planet",
            element: <PlanetFacts
                selectedPlanet={selectedPlanet}
                setSelectedPlanet={setSelectedPlanet}
                filter={filter}
                setFilter={setFilter}
                name={name}
                planetImage={planetImage}
                wikipedia={wikipedia}
                rotation={rotation}
                revolution={revolution}
                radius={radius}
                temp={temp}
                image={image}
                description={description}
            />
        }
    ])

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <RouterProvider router={router} />
        </ThemeProvider>
    );
};

export default Router;